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
  public pageSize:number = 10;
  public desde: number = 0;
  public hasta: number = 10;
  public search: string = '';
  public spinner: boolean = true;


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
            this.spinner= false;
          });
  }

  cambiarPagina( e:any ) {
    console.log(e);
    this.desde = e.page * e.rows;
    this.hasta = this.desde + e.rows;
    console.log(this.desde);
  }

  buscarComics( search: string ) {

    this.search = search;
    
  }

}
