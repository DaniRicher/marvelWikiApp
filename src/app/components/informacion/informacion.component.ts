import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from '../../services/personajes.service';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  public id: any;

  constructor( private activateRoute: ActivatedRoute,
               private personajesService: PersonajesService,
               private router: Router ) { }

  ngOnInit(): void {

    const link = this.router.url;
    this.activateRoute.params
            .subscribe( ({id}) => {
              this.id = id;
            });
  }

}
