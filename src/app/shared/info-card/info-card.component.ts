import { Component, OnInit } from '@angular/core';
import { INFO } from './rooms';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})

export class InfoCardComponent implements OnInit {
  rooms = INFO;

  constructor() { }

  ngOnInit(): void {
  }

}
