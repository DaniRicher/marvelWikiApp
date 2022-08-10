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
        label: 'File',
        icon: 'pi pi-fw pi-pencil'
    },
    {
        label: 'Edit',
        icon: 'pi pi-fw pi-pencil',
    }
    ]
    
  }

}
