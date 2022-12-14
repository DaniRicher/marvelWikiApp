import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Respuesta, Personaje } from '../interfaces/personajes.interface';
import { of, tap, map } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root',
})
export class PersonajesService {

  private personajes: any = [];
  private infoPersonajes: any = [];
  private imagenes: any[] = [];

  constructor( private https: HttpClient ) { }

  obtenerPersonajes() {
    
    if( this.personajes.length > 0 ) {

      //No hay personajes
      return of( this.personajes );

    } else {

      const url = `${ base_url }/characters`;
      return this.https.get<Respuesta>( url )
          .pipe(
            map(  personajes => {
              return this.personajes = personajes.data.results;
            })
      );
      
    }
  }

  obtenerInfoPersonajes( id: number ) {

      const url = `${ base_url }/characters/${ id }`;
      return this.https.get( url )
        .pipe(
          map( (personaje:any) => {
            return this.infoPersonajes = personaje.data.results;
          }),
        );

  }

  obtenerImagenes() {

    if( this.imagenes.length > 0 ){

      return of( this.imagenes );
      
    } else {
      const url = `${base_url}/characters`;
      return this.https.get<Respuesta>(url)
          .pipe(
            map( ({data}) => {
              this.imagenes= [];
              data.results.forEach( elem => {
                const path = elem.thumbnail.path;
                const extension = elem.thumbnail.extension;
                const img = path+'.'+extension;
                this.imagenes.push(img);
              });
              return this.imagenes;
            })
          )
    }
  }



}
