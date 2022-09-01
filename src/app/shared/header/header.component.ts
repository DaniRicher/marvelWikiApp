import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { filter, map, Subscription } from 'rxjs';
import { ActivationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[];
  visibleSidebar1: boolean = false;

  public titulo: string = '';
  public tituloSubs$!: Subscription;

  constructor( private router: Router ) {

    this.tituloSubs$ = this.getArgumentosRuta()
      .subscribe( ({titulo}) =>{
      this.titulo= titulo;
      document.title = `MarvelApp - ${ titulo }`;
    });

  }

  ngOnInit(): void {

    this.items = [
      {
        label: 'Inicio',
        icon: 'fa-solid fa-home',
        routerLink: ['dashboard'],
      },
      {
        label: 'Personajes',
        icon: 'fa-solid fa-mask',
        routerLink: ['personajes']
        
      },
      {
        label: 'Comics',
        icon: 'fa-solid fa-newspaper',
        routerLink: ['comics']
      },
      {
        label: 'Favoritos',
        icon: 'fa-solid fa-star',
        routerLink: ['favoritos']
      },
      {
        label: 'Ajustes',
        icon: 'fa-solid fa-sliders',
        routerLink: ['ajustes']
      }
    ]
  }

  getArgumentosRuta() {
    return this.router.events
      .pipe(
        filter<any> ( event => event instanceof ActivationEnd ),
        filter ( ( event: ActivationEnd ) => event.snapshot.firstChild === null ),
        map ( ( event: ActivationEnd ) => event.snapshot.data ),
      );
  }

}
