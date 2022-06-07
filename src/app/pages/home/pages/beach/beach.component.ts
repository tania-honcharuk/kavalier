import { Component, OnInit } from '@angular/core';
import { BEACH } from './beach';

@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrls: ['./beach.component.scss']
})
export class BeachComponent implements OnInit {
  title = "beach club";

  items = BEACH;
  constructor() { }

  ngOnInit(): void {
  }

}
