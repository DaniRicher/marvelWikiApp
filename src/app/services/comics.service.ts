import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, of } from 'rxjs';
import { Comics } from '../interfaces/comics.interfaces';
import { Respuesta } from '../interfaces/personajes.interface';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private comics: any[] = [];
  private imagenes: any[] = [];

  constructor( private http: HttpClient ) { }

  obtenerComics() {
    if( this.comics.length > 0) {
      return of( this.comics );
    } else {
      
      const url = `${ base_url }/comics`;
      return this.http.get<Comics>( url )
            .pipe(
              map( data => {
                return this.comics = data.data.results;
              })
            );
    }
  }

  obtenerImagenes() {

    if( this.imagenes.length > 0 ){

      return of( this.imagenes );
      
    } else {
      const url = `${base_url}/comics`;
      return this.http.get<Comics>(url)
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
