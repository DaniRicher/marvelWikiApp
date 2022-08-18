import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { Result } from '../../interfaces/comics.interfaces';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
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
               private router: Router ) { }

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
      Swal.fire('Oops!!', 'El comic ya está agregado como favorito' , 'error');
      return;
    } else {
      Swal.fire({
        title: '¿Estás seguro?',
        text: `Guardar a ${ nombre }`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si',
        cancelButtonText: 'Cancelar'
      }).then( result => {
        if( result.isConfirmed ) {
          Swal.fire('Comic agregado con exito!!', '', 'success');
          this.comicsFav.push({ id, nombre, img });
          this.guardarLocalStorage('comicsFav', this.comicsFav );
        }
      });
    }

  }

}
