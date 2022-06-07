import { Component, OnInit } from '@angular/core';
import { ACTIVITY } from './entertainment';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.scss']
})
export class EntertainmentComponent implements OnInit {
  title = "Sports & entertainment";

  items = ACTIVITY;

  constructor() { }

  ngOnInit(): void {
  }

}
