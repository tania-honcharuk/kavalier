import { Component, OnInit } from '@angular/core';
import { HostListener } from "@angular/core";

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  email = 'reception@kavalier.com.ua'
  mailText: string = '';

  constructor() {
  }

  ngOnInit(): void {
  }

  mailMe() {
    this.mailText =
      'mailto:abc@abc.com?subject=files&body=' + this.email;
    window.location.href = this.mailText;
  }

}
