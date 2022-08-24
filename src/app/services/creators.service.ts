import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, of } from 'rxjs';

const base_url = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CreatorsService {

  private creators : any[] = [];

  constructor( private http: HttpClient ) { }

  obtenerCreadores() {

    if( this.creators.length > 0 ) {

      return of( this.creators );

    } else {

      const url = `${ base_url }/creators`
      return this.http.get( url )
          .pipe(
            map( (creators:any) => {
              return this.creators = creators.data.results;
            }), 
          );
    }

  }
}
