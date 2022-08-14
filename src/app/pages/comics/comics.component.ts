import { Component, OnInit } from '@angular/core';
import { ComicsService } from '../../services/comics.service';
import { Comics } from '../../interfaces/personajes.interface';
import { Result } from '../../interfaces/comics.interfaces';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css'],
})
export class ComicsComponent implements OnInit {

  public comics: Result[] = [];
  public imagenes: Result[] = [];
  public pageSize:number = 10;
  public desde: number = 0;
  public hasta: number = 10;
  public search: string = '';
  public spinner: boolean = true;
  public pag: boolean = true;
  public noFound: boolean = false;


  constructor( private comicsService: ComicsService ) { }

  ngOnInit(): void {
    this.spinner = true;
    this.obtenerComics();
  }

  obtenerComics() {
    this.comicsService.obtenerComics()
    .subscribe( comics => {
      this.comics = comics;
      this.spinner = false;
    });
  }

  cambiarPagina( e:any ) {
    this.desde = e.page * e.rows;
    this.hasta = this.desde + e.rows;
  }

  buscarComics( search: string ) {

    this.search = search;

    if( search.length === 0 ) {
      this.pag = true;
    } else {
      this.pag = false;
    }
  }

}
