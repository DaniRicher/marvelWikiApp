import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeadersAndParamsService } from './headers-and-params.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HeadersAndParamsService,
    multi: true
  }],
})
export class InterceptorsModule { }
