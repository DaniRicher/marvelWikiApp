import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public spinner: boolean = true;
  public personajes: any[] = [];
  public comics: any[] = [];
  public responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

  constructor( private router: Router ) { }

  

  ngOnInit(): void {

    this.cargarLocalStorage();

    this.spinner = false;

  }
  cargarLocalStorage() {

    if(localStorage.getItem('personajesFav')! ){
      this.personajes = JSON.parse(localStorage.getItem('personajesFav')!);
    }
    if(localStorage.getItem('comicsFav')! ){
      this.comics = JSON.parse(localStorage.getItem('comicsFav')!);
    }
    
  }

  obtenerPersonaje( id:number ) {
    this.router.navigate([`/dashboard/personajes/${ id }`]);
  }

  obtenerComic( id:number ) {
    this.router.navigate([`/dashboard/comics/${ id }`]);
  }

  eliminarPersonaje( id: number ) {

    let personaje = this.personajes.filter( data => data.id !== id );
    this.personajes = personaje;
    let nuevoLocal = JSON.stringify( this.personajes );
    localStorage.setItem('personajesFav', nuevoLocal );
    
  }

  eliminarComic( id: number ) {

    let comic = this.comics.filter( data => data.id !== id );
    console.log(comic);
    this.comics = comic;
    let nuevoLocal = JSON.stringify( this.comics );
    localStorage.setItem('comicsFav', nuevoLocal );
    
  }



}
