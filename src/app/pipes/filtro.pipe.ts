import { Pipe, PipeTransform } from '@angular/core';
import { Result, Comics } from '../interfaces/comics.interfaces';
import { Personaje } from '../interfaces/personajes.interface';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( comics: any[], page:number,  search: string = '' ): any[] | boolean | any{

    if( search.length === 0){
      return comics.slice( page, page + 10 );
    }

    let expresion = new RegExp(`${ search }.*`, 'i' )
    let busqueda = comics.filter( elem => expresion.test(elem.name + elem.title) );
    
    return busqueda;
  }

}
