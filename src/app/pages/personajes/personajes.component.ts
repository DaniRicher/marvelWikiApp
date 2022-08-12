import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';
import { Personaje } from '../../interfaces/personajes.interface';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  public personajes: Personaje[] = [];
  public imagenes: any[] = [];

  constructor( private personajesService: PersonajesService ) { }

  ngOnInit(): void {

    this.obtenerPersonajes();
    this.obtenerImagenes();
    
  }

  obtenerPersonajes() {
    this.personajesService.obtenerPersonajes()
    .subscribe( ({data}) =>{
      if( !data ) {
        this.personajes = this.personajesService.personajes;
      } else {
        this.personajes = data.results;;
      }
    });
  }

  obtenerImagenes() {
    this.personajesService.obtenerImagenes()
          .subscribe( data => {
            this.imagenes = data;
          });
  }

}
