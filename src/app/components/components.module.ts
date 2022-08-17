import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacionComponent } from './informacion/informacion.component';
import { PrimeNgModule } from '../primeng/prime-ng.module';
import { InfoComicsComponent } from './info-comics/info-comics.component';



@NgModule({
  declarations: [
    InformacionComponent,
    InfoComicsComponent,
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    InformacionComponent,
    InfoComicsComponent
  ]
})
export class ComponentsModule { }
