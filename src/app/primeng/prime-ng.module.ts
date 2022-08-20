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
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CarouselModule } from 'primeng/carousel';
import { ImageModule } from 'primeng/image';
import { DialogModule } from 'primeng/dialog';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';





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
    ScrollPanelModule,
    PaginatorModule,
    ProgressSpinnerModule,
    CarouselModule,
    ImageModule,
    DialogModule,
    ConfirmDialogModule,
    ToastModule
  ]
})
export class PrimeNgModule { }
