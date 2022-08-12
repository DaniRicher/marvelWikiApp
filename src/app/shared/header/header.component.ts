import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  items!: MenuItem[];
  visibleSidebar1: boolean = false;

  constructor() { }

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
      }
    ]
  }

}
