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

  constructor() { }

  

  ngOnInit(): void {

    if(localStorage.getItem('personajesFav')! ){
      this.personajes = JSON.parse(localStorage.getItem('personajesFav')!);
    }
    if(localStorage.getItem('comicsFav')! ){
      this.comics = JSON.parse(localStorage.getItem('comicsFav')!);
    }
    console.log(this.comics);
    this.spinner = false;

  }

}
