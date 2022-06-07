import { Component, Input, OnInit } from '@angular/core';
import { InfoCard } from './info-card';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrls: ['./info-card.component.scss']
})

export class InfoCardComponent implements OnInit {
  @Input() items: InfoCard[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
