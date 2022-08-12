import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//PrimeNG
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { ToolbarModule } from 'primeng/toolbar';
import { SidebarModule } from 'primeng/sidebar';
import { MenuModule } from 'primeng/menu';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ScrollPanelModule } from 'primeng/scrollpanel';




@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonModule,
    MenubarModule,
    ToolbarModule,
    SidebarModule,
    MenuModule,
    CardModule,
    InputTextModule,
    ScrollPanelModule
  ]
})
export class PrimeNgModule { }
