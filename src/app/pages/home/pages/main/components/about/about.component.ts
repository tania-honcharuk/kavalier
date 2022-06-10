import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  bgImgFirst = true;
  bgImgSecond = false;
  bgImgThird = false;

  constructor(private scroller: ViewportScroller) { }

  ngOnInit(): void {
  }

  setFirstImg() {
    this.bgImgFirst = true;
    this.bgImgSecond = false;
    this.bgImgThird = false;
  };

  setSecondImg() {
    this.bgImgFirst = false;
    this.bgImgSecond = true;
    this.bgImgThird = false;
  };

  setThirdImg() {
    this.bgImgFirst = false;
    this.bgImgSecond = false;
    this.bgImgThird = true;
  };

  goDown() {
    this.scroller.scrollToAnchor("welcome");
  }
}
