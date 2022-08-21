import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Personaje } from '../../interfaces/personajes.interface';
import { Router } from '@angular/router';

import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';


import Swal from 'sweetalert2';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css'],
  providers: [ ConfirmationService, MessageService ]
})
export class PersonajesComponent implements OnInit {

  public personajes: Personaje[] = [];
  public imagenes: any[] = [];
  public pageSize:number = 10;
  public desde: number = 0;
  public hasta: number = 10;
  public search: string = '';
  public spinner: boolean = true;
  public pag: boolean = true;
  public noFound!: boolean;

  public personajesFav: any[] = [];
  public id: any[] = [];


  constructor( private personajesService: PersonajesService,
               private router: Router,
               private confirmationService: ConfirmationService,
               private messageService: MessageService ) { }

  ngOnInit(): void {
    this.spinner = true;
    this.obtenerPersonajes();
  }

  obtenerPersonajes() {
    this.personajesService.obtenerPersonajes()
        .subscribe(  data => {
          this.personajes = data;
          this.spinner = false;
        });
  }
  cambiarPagina( e:any ) {
    this.desde = e.page * e.rows;
  }

  buscar( search:string ) {
    this.search = search;

    if( search.length === 0 ) {
      this.pag = true;
    } else {
      this.pag = false;
    } 
  }
  mostrarInfo( id: number) {
    this.router.navigate([`/dashboard/personajes/${ id }`]);
  }

  guardarLocalStorage( key: string, personaje: any[]) {

    localStorage.setItem( key, JSON.stringify( personaje ));

  }

  cargarLocalStorage() {

    this.personajesFav = [];
    if( localStorage.getItem('personajesFav')! ) {
      this.personajesFav = JSON.parse(localStorage.getItem('personajesFav')!);
      this.personajesFav.forEach( ({id}) => {
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
          this.personajesFav.push({ id, nombre, img });
          this.guardarLocalStorage('personajesFav', this.personajesFav );
        },
        reject: ( type: any) => {
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
