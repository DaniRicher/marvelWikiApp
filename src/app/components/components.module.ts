import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InformacionComponent } from './informacion/informacion.component';
import { PrimeNgModule } from '../primeng/prime-ng.module';



@NgModule({
  declarations: [
    InformacionComponent
  ],
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  exports: [
    InformacionComponent
  ]
})
export class ComponentsModule { }
