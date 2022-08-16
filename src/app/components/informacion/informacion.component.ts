import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-informacion',
  templateUrl: './informacion.component.html',
  styleUrls: ['./informacion.component.css']
})
export class InformacionComponent implements OnInit {

  constructor( private activateRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    this.activateRoute.params
        .subscribe( ({id}:any) => {
          console.log(id);
        });
  }

}
