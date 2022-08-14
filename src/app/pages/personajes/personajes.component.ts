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
  public pageSize:number = 10;
  public desde: number = 0;
  public hasta: number = 10;
  public search: string = '';
  public spinner: boolean = true;
  public pag: boolean = true;
  public noFound!: boolean;


  constructor( private personajesService: PersonajesService ) { }

  ngOnInit(): void {
    this.spinner = true;
    this.obtenerPersonajes();
    this.obtenerImagenes();
  }

  obtenerPersonajes() {
    this.personajesService.obtenerPersonajes()
        .subscribe(  data => {
          
          this.personajes = data;
        });
  }

  obtenerImagenes() {
    this.personajesService.obtenerImagenes()
          .subscribe( data => {
            this.imagenes = data;
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

}
