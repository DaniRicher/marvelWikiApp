import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [ ConfirmationService, MessageService ]
})
export class DashboardComponent implements OnInit {


  constructor( ) { }

  

  ngOnInit(): void {
  }

  
  
}
