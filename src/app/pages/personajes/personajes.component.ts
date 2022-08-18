import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Personaje } from '../../interfaces/personajes.interface';
import { Router } from '@angular/router';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
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
               private router: Router ) { }

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
      Swal.fire('Oops!!', 'El personaje ya está agregado como favorito' , 'error');
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
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire('Personaje agregado con exito!!', '', 'success');
          this.personajesFav.push({ id, nombre, img });
          this.guardarLocalStorage('personajesFav', this.personajesFav );
        }
      });
    }

  }

}
