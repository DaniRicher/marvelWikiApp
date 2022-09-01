import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImgsService {

  constructor() { }

  cambiarImagen( theme: string ) {

    if( theme === 'light' ) {
      document.getElementById('img-header')?.setAttribute('src', '../../../assets/Marvel_Logo.png');
      document.getElementById('img-footer')?.setAttribute('src', '../../../assets/Marvel_Logo.png');
    } else {
      document.getElementById('img-header')?.setAttribute('src', '../../../assets/marvel.png');
      document.getElementById('img-footer')?.setAttribute('src', '../../../assets/marvel.png');
    }
    
  }
}
