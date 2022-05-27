import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-networks',
  templateUrl: './social-networks.component.html',
  styleUrls: ['./social-networks.component.scss']
})
export class SocialNetworksComponent implements OnInit {
  facebookLink:string = "https://www.facebook.com/";
  twitterLink:string = "https://twitter.com/";
  tripAdvisorLink:string = "https://www.tripadvisor.ru/";
  foursquareLink:string = "https://foursquare.com/";
  instagramLink:string = "https://www.instagram.com/"


  constructor() { }

  ngOnInit(): void {
  }

}
