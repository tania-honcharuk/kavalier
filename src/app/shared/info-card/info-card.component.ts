import { Component, OnInit } from '@angular/core';
import { INFO, InfoCard } from './info-card';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})
export class InfoCardComponent implements OnInit {
  info = INFO;

  constructor() { }

  ngOnInit(): void {
  }

}
