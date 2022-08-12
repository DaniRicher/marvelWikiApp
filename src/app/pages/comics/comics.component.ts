import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { Comics } from '../../interfaces/personajes.interface';
import { Result } from '../../interfaces/comics.interfaces';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  public comics: Result[] = [];
  public imagenes: Result[] = [];

  constructor( private comicsService: ComicsService ) { }

  ngOnInit(): void {
    this.obtenerComics();
    this.obtenerImagenes();
  }

  obtenerComics() {
    this.comicsService.obtenerComics()
    .subscribe( comics => {
      this.comics = comics;
    });
  }
  obtenerImagenes() {
    this.comicsService.obtenerImagenes()
          .subscribe( imagenes => {
            this.imagenes = imagenes;
          });
  }

}
