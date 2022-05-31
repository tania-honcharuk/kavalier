import { Component, OnInit } from '@angular/core';
import { BLOG } from './mock-block'

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  blog = BLOG;

  constructor() { }

  ngOnInit(): void {
  }

}
