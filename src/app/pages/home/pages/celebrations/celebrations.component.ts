import { Component, OnInit } from '@angular/core';
import { EVENTS } from './events';

@Component({
  selector: 'app-celebrations',
  templateUrl: './celebrations.component.html',
  styleUrls: ['./celebrations.component.scss']
})
export class CelebrationsComponent implements OnInit {
  title = "celebrations";

  items = EVENTS;

  constructor() { }

  ngOnInit(): void {
  }

}
