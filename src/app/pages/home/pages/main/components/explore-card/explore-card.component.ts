import { Component, OnInit } from '@angular/core';
import { BLOG } from './mock-block';

@Component({
  selector: 'app-explore-card',
  templateUrl: './explore-card.component.html',
  styleUrls: ['./explore-card.component.scss']
})
export class ExploreCardComponent implements OnInit {
  blog = BLOG;

  constructor() { }

  ngOnInit(): void {
  }

}
