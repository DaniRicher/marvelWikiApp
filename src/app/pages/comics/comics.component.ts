import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { Result } from '../../interfaces/comics.interfaces';
import { Router } from '@angular/router';

import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';


import Swal from 'sweetalert2';


@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
  providers: [ ConfirmationService, MessageService ]
})
export class ComicsComponent implements OnInit {

  public comics: Result[] = [];
  public imagenes: Result[] = [];
  public pageSize:number = 10;
  public desde: number = 0;
  public hasta: number = 10;
  public search: string = '';
  public spinner: boolean = true;
  public pag: boolean = true;
  public noFound: boolean = false;

  public comicsFav:any[] = [];
  public id:any[] = [];


  constructor( private comicsService: ComicsService,
               private router: Router,
               private messageService: MessageService,
               private confirmationService: ConfirmationService ) { }

  ngOnInit(): void {
    this.spinner = true;
    this.obtenerComics();
  }

  obtenerComics() {
    this.comicsService.obtenerComics()
    .subscribe( comics => {
      this.comics = comics;
      this.spinner = false;
    });
  }

  cambiarPagina( e:any ) {
    this.desde = e.page * e.rows;
    this.hasta = this.desde + e.rows;
  }

  buscarComics( search: string ) {

    this.search = search;

    if( search.length === 0 ) {
      this.pag = true;
    } else {
      this.pag = false;
    }
  }

  mostrarInfo( id: number) {
    this.router.navigate([`/dashboard/comics/${ id }`]);
  }

  guardarLocalStorage( key: string, comic: any[]) {

    localStorage.setItem( key, JSON.stringify( comic ));

  }

  cargarLocalStorage() {

    this.comicsFav = [];
    if( localStorage.getItem('comicsFav')! ) {
      this.comicsFav = JSON.parse(localStorage.getItem('comicsFav')!);
      this.comicsFav.forEach( ({id}) => {
        this.id.push(id);
      });
    }

  }

  agregarFavoritos( id: number, nombre: string, img:string ) {

    this.cargarLocalStorage();
    if( this.id.includes(id) ) {
      this.messageService.add({severity:'error', summary:'Error', 
                              detail:'El personaje ya está como favorito'});
      return;
    } else {

      this.confirmationService.confirm({
        message: `¿Seguro que desea guardar a ${ nombre } como favorito?`,
        
        accept: () => {
          this.messageService.add({severity:'success', summary:'Confirmado', 
                                  detail:'Ha sido agregado a sus favoritos con éxito'});
          this.comicsFav.push({ id, nombre, img });
          this.guardarLocalStorage('comicsFav', this.comicsFav );
        },
        reject: ( type: any ) => {
          switch( type ) {
            case ConfirmEventType.REJECT:
                this.messageService.add({severity:'warn', summary:'Cancelado', detail:'No ha sido agregado'});
            break;
            case ConfirmEventType.CANCEL:
                this.messageService.add({severity:'warn', summary:'Cancelado', detail:'No ha sido agregado'});
            break;
          }
        }
      });
    }

  }

}
