import { Component, OnInit } from '@angular/core';
import { INFO } from './rooms';
import { InfoCard } from './info-card';

@Component({
  selector: 'app-suites',
  templateUrl: './suites.component.html',
  styleUrls: ['./suites.component.scss']
})
export class SuitesComponent implements OnInit {
  rooms = INFO;
  
  selectedRoom: InfoCard = this.rooms[0];
  
  onSelect(room: InfoCard): void {
    this.selectedRoom = room;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
