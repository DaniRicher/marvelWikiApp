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

  public id: any;

  public personajes!: any[];
  public comics!: any[];

  constructor( private activateRoute: ActivatedRoute,
               private personajesService: PersonajesService ) { }

  ngOnInit(): void {

    this.paramsId();
      this.obtenerPersonajes();
    
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
          this.personajes = data;
        });
  }

}
