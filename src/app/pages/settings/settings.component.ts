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

  constructor( @Inject(DOCUMENT) private document: Document,
               private imgsService: ImgsService ) {
    let theme = window.localStorage.getItem('theme') || 'dark';
    console.log(theme);
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

}
