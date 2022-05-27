import { Component, OnInit } from '@angular/core';
import { BLOG } from './mock-block';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.scss']
})
export class BlogCardComponent implements OnInit {
  blog = BLOG;
  
  constructor() { }

  ngOnInit(): void {
  }

}
