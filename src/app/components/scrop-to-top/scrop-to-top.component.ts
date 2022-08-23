import { DOCUMENT } from '@angular/common';
import { Component, OnInit, Inject, HostListener } from '@angular/core';


@Component({
  selector: 'app-scrop-to-top',
  templateUrl: './scrop-to-top.component.html',
  styleUrls: ['./scrop-to-top.component.css']
})
export class ScropToTopComponent implements OnInit {

  windowScrolled?: boolean;

  constructor( @Inject(DOCUMENT) private document: Document ) { }

  @HostListener( 'window:scroll', [] )
  onWindowScroll(): void {
      if ( window.scrollY || document.documentElement.scrollTop || document.body.scrollTop > 100 ) {
          this.windowScrolled = true;
      }
     else if (this.windowScrolled && window.scrollY || document.documentElement.scrollTop || document.body.scrollTop < 10 ) {
          this.windowScrolled = false;
      }
  }
  scrollToTop(): void {
      (function smoothscroll(): void {
          const currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
          if ( currentScroll > 0 ) {
              window.requestAnimationFrame(smoothscroll);
              window.scrollTo( 0, currentScroll - (currentScroll / 8));
          }
      })();
  }

  ngOnInit(): void {
  }

}
