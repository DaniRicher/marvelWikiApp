import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonajesService } from '../../services/personajes.service';
import { Location } from '@angular/common';




@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  public id: any;

  public personajes!: any[];
  public comics!: any[];
  public spinner: boolean = true;

  constructor( private activateRoute: ActivatedRoute,
               private personajesService: PersonajesService,
               private location: Location ) { }

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
          this.spinner = false;
        });
  }

  irAtras() {
    this.location.back();
  }

}
