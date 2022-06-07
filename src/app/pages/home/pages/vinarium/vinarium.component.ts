import { Component, OnInit } from '@angular/core';
import { VINARIUM } from './vinarium';

@Component({
  selector: 'app-vinarium',
  templateUrl: './vinarium.component.html',
  styleUrls: ['./vinarium.component.scss']
})
export class VinariumComponent implements OnInit {
  title = "Vinarium";

  items = VINARIUM;

  constructor() { }

  ngOnInit(): void {
  }

}
