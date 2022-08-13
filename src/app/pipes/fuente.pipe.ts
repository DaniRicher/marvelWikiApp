import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fuente'
})
export class FuentePipe implements PipeTransform {

  transform( value: string = '' ): any {
  }

}
