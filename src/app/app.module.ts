import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { PrimeNgModule } from './primeng/prime-ng.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeNgModule,
    HttpClientModule,
    InterceptorsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
