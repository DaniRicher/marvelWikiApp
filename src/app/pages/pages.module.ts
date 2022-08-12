import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { PersonajesComponent } from './personajes/personajes.component';
import { ComicsComponent } from './comics/comics.component';
import { PrimeNgModule } from '../primeng/prime-ng.module';


@NgModule({
  declarations: [
    HomeComponent,
    DashboardComponent,
    PersonajesComponent,
    ComicsComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    PrimeNgModule
  ]
})
export class PagesModule { }
