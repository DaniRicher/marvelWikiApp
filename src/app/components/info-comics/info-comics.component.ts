import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-info-comics',
  templateUrl: './info-comics.component.html',
  styleUrls: ['./info-comics.component.css']
})
export class InfoComicsComponent implements OnInit {

  public id: any;
  public comics: any[] = [];
  public spinner: boolean = true;

  constructor( private comicsService: ComicsService,
               private activatedRoute: ActivatedRoute,
               private location: Location ) { }

  ngOnInit(): void {

    this.paramsId();
    this.obtenerInfoComics();

  }

  paramsId() {
    this.activatedRoute.params
      .subscribe( ({id}) => {
        this.id = id;
      });
  }

  obtenerInfoComics() {
    this.comicsService.obtenerInfoComics( this.id )
        .subscribe( comics => {
          this.comics = comics;
          this.spinner = false;
        });
  }
  irAtras() {
    this.location.back();
  }


}
