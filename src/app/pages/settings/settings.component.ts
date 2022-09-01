import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { ImgsService } from '../../services/imgs.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  themeSelection: string = '';
  public tamanio: number = 16;


  constructor( @Inject(DOCUMENT) private document: Document,
               private imgsService: ImgsService ) {
    let theme = window.localStorage.getItem('theme') || 'dark';
    if( theme === 'light' ) {
      this.themeSelection = 'light';
    } else {
      this.themeSelection = 'dark';
    }
  }

  ngOnInit(): void {
  }

  changeTheme( state: string ) {

    let theme = state;
    window.localStorage.setItem( 'theme', theme );
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = 'mdc-'+theme+'-indigo'+'.css';

    this.imgsService.cambiarImagen(theme);
    
  }

  sizeFont( number: number ) {

    let tam = parseInt(localStorage.getItem('font') || '16');
    this.tamanio = tam;

    this.tamanio += number;
    if( this.tamanio <= 11 ) {
      return this.tamanio = 12;
    }

    if( this.tamanio >= 19 ) {
      return this.tamanio = 18;
    }

    localStorage.setItem('font', this.tamanio.toString()+'px');
    return this.document.querySelector('html')!.style.fontSize = this.tamanio.toString()+'px';
  }

}
