import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacionComponent } from './informacion/informacion.component';
import { PrimeNgModule } from '../primeng/prime-ng.module';
import { InfoComicsComponent } from './info-comics/info-comics.component';
import { ScropToTopComponent } from './scrop-to-top/scrop-to-top.component';



@NgModule({
  declarations: [
    InformacionComponent,
    InfoComicsComponent,
    ScropToTopComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    InformacionComponent,
    InfoComicsComponent,
    ScropToTopComponent
  ]
})
export class ComponentsModule { }
