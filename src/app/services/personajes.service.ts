import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { InterceptorsModule } from '../interceptors/interceptors.module';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {

  constructor( private https: HttpClient ) { }

  obtenerPersonajes() {
    const url = `${ base_url }/characters`;
    return this.https.get( url );
  }
}
