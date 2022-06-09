import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  bgimg01 = false;

  constructor() { }

  ngOnInit(): void {
  }
  setBgImg() {
    this.bgimg01 = !this.bgimg01;
  };
}
