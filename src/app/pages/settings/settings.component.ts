import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  themeSelection: boolean = false;

  constructor(@Inject(DOCUMENT) private document: Document) {
    let theme = window.localStorage.getItem('theme');
    if( theme ) {
      this.themeSelection = theme == 'light' ? true : false;
    }
  }

  ngOnInit(): void {
  }

  changeTheme( state: boolean ) {
    let theme = state ? 'dark' : 'light';
    window.localStorage.setItem( 'theme', theme );
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = 'mdc-'+theme+'-indigo'+'.css';
  }

}
