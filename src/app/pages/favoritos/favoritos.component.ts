import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, ConfirmEventType, MessageService } from 'primeng/api';

@Component({
  selector: 'app-favoritos',
  templateUrl: './favoritos.component.html',
  styleUrls: ['./favoritos.component.css'],
  providers: [ ConfirmationService, MessageService ]
})
export class FavoritosComponent implements OnInit {

  public spinner: boolean = true;
  public personajes: any[] = [];
  public comics: any[] = [];
  public responsiveOptions = [
    {
      breakpoint: '1200px',
      numVisible: 4,
      numScroll: 4
    },
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

  constructor( private router: Router,
               private confirmationService: ConfirmationService,
               private messageService: MessageService ) { }

  ngOnInit(): void {

    this.cargarLocalStorage();
    this.spinner = false;
    
  }

  cargarLocalStorage() {

    if(localStorage.getItem('personajesFav')! ){
      this.personajes = JSON.parse(localStorage.getItem('personajesFav')!);
    }
    if(localStorage.getItem('comicsFav')! ){
      this.comics = JSON.parse(localStorage.getItem('comicsFav')!);
    }
    
  }

  obtenerPersonaje( id:number ) {
    this.router.navigate([`/dashboard/personajes/${ id }`]);
  }
  obtenerComic( id:number ) {
    this.router.navigate([`/dashboard/comics/${ id }`]);
  }

  eliminarPersonaje( personaje: any ) {

    const id = personaje.id;
    const nombre = personaje.nombre;

    this.confirmationService.confirm({
      message: `¿Seguro que desea eliminar a ${ nombre } de sus favoritos?`,
      accept: () => {
        this.messageService.add({severity:'info', summary:'Confirmado', detail:'Ha sido eliminado de sus favoritos con éxito'});
        let personajes = this.personajes.filter( data => data.id !== id );
        this.personajes = personajes;
        let nuevoLocal = JSON.stringify( this.personajes );
        localStorage.setItem('personajesFav', nuevoLocal );
      },
      reject: (type:any) => {
        switch(type) {
          case ConfirmEventType.REJECT:
              this.messageService.add({severity:'error', summary:'Cancelado', detail:'No ha sido eliminado'});
          break;
          case ConfirmEventType.CANCEL:
              this.messageService.add({severity:'error', summary:'Cancelado', detail:'No ha sido eliminado'});
          break;
        }
      }

    });

  }

  eliminarComic( comic: any ) {

    const id = comic.id;
    const nombre = comic.nombre
    this.confirmationService.confirm({
      message: `Seguro que quiere eliminar a ${ nombre } de sus favoritos`,
      accept: () => {
        this.messageService.add({severity:'info', summary:'Confirmado', detail:'Ha sido eliminado de sus favoritos con éxito'});
        let comics = this.comics.filter( data => data.id !== id );
        this.comics = comics;
        let nuevoLocal = JSON.stringify( this.comics );
        localStorage.setItem('comicsFav', nuevoLocal );
      },
      reject: (type:any) => {
        switch(type) {
          case ConfirmEventType.REJECT:
              this.messageService.add({severity:'error', summary:'Cancelado', detail:'No ha sido eliminado'});
          break;
          case ConfirmEventType.CANCEL:
              this.messageService.add({severity:'warn', summary:'Cancelado', detail:'No ha sido eliminado'});
          break;
        }
      }
    });
  }

}
