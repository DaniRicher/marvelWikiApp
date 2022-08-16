import { Component, OnInit } from '@angular/core';
import { PersonajesService } from '../../services/personajes.service';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public spinner: boolean = true;
  public personajes: any[] = [];
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
        numVisible: 2,
        numScroll: 2
    }
];

  constructor( private personajesService: PersonajesService ) { }

  

  ngOnInit(): void {
    this.personajesService.obtenerPersonajes()
        .subscribe( data => {
          this.personajes = data;
          this.spinner = false;
        });
  }

}
