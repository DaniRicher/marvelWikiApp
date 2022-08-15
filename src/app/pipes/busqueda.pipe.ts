import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'busqueda'
})
export class BusquedaPipe implements PipeTransform {

  transform( noFound:boolean = false, search:string = '', comics:any[] ): boolean {

    
    if( search.length === 0) {
      return false;
    }
    let expresion = new RegExp(`${ search }.*`, 'i' )
    let busqueda = comics.filter( elem => expresion.test(elem.name + elem.title) );

    if( busqueda.length === 0) {
      noFound = true;
    }
    return noFound;
  }

}
