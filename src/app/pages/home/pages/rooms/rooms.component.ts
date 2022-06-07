import { Component, OnInit } from '@angular/core';
import { ROOMS } from './rooms';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {
  title = "rooms & suites";
  
  rooms = ROOMS;

  constructor() { }

  ngOnInit(): void {
  }

}
