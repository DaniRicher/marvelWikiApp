import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  

  constructor( private personajeServices: PersonajesService ) { }

  

  ngOnInit(): void {
    this.personajeServices.obtenerPersonajes()
      .subscribe( info => {
        console.log(info);
    })
  }

}
