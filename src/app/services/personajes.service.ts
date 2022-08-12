import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Respuesta, Personaje } from '../interfaces/personajes.interface';
import { of, tap } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {

  public personajes: any = [];

  constructor( private https: HttpClient ) { }

  obtenerPersonajes() {
    
    if( this.personajes.length > 0) {

      //No hay personajes
      return of( this.personajes );

    } else {

      const url = `${ base_url }/characters`;
      return this.https.get<Respuesta>( url )
          .pipe(
            tap(  personajes => {
              console.log('Hola');
              this.personajes = personajes.data.results
            })
      );
      
    }
  }



}
