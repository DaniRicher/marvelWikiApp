import { Component, OnInit } from '@angular/core';
import { ImgsService } from '../../services/imgs.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( private imgsService: ImgsService ) { }

  ngOnInit(): void {

    let theme = localStorage.getItem('theme') || 'mdc-dark-indigo';

    this.imgsService.cambiarImagen( theme );

    let themeLink = document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = theme+'.css';

    this.font();

  }

  font() {
    let font = localStorage.getItem('font') || '16px';
    document.querySelector('html')!.style.fontSize =  font;
  }

}
