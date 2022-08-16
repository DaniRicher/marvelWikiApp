import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from '../../services/personajes.service';
import { ComicsService } from '../../services/comics.service';
import { Personaje } from '../../interfaces/personajes.interface';



@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  public link: string = this.router.url;
  public id: any;

  public personajes!: any[];

  constructor( private activateRoute: ActivatedRoute,
               private personajesService: PersonajesService,
               private comicsService: ComicsService,
               private router: Router ) { }

  ngOnInit(): void {

    this.paramsId();

    if( this.link.includes('personajes') ) {

      this.obtenerPersonajes();

    } else if( this.link.includes('comics') ) {

      this.obtenerComics();
    }
    
  }

  paramsId() {
    this.activateRoute.params
            .subscribe( ({id}) => {
              this.id = id;
            });
  }

  obtenerPersonajes() {
    this.personajesService.obtenerInfoPersonajes( this.id )
        .subscribe( data => {
          console.log(data);
          this.personajes = data;
        });
  }

  obtenerComics() {
    this.comicsService.obtenerInfoComics( this.id )
    .subscribe( data => {
      console.log(data);
    });
  }

}
