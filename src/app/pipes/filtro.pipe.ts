import { Pipe, PipeTransform } from '@angular/core';
import { Result } from '../interfaces/comics.interfaces';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform( comics: Result[], search: string = '' ): Result[] {

    let expresion = new RegExp(`${ search }.*`, 'i' );
    let busqueda = comics.filter( elem => expresion.test(elem.title) );
    return busqueda;
  }

}
