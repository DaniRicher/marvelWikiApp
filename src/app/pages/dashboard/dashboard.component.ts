import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  
  public data: any;

  constructor( private personajesService: PersonajesService ) { }

  

  ngOnInit(): void {
    this.personajesService.obtenerPersonajes()
        .subscribe( data => {
          console.log(data);
          data = data;
        })
  }

}
