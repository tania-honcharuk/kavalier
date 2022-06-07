import { Component, OnInit } from '@angular/core';
import { InfoCard, Rooms } from 'src/app/models/rooms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  email = 'reception@kavalier.com.ua'
  mailText: string = '';
  rooms = Rooms;
  
  selectedRoom: InfoCard = this.rooms[0];

  constructor() {
  }

  ngOnInit(): void {
  }

  mailMe() {
    this.mailText =
      'mailto:abc@abc.com?subject=files&body=' + this.email;
    window.location.href = this.mailText;
  }

  onSelect(room: InfoCard): void {
    this.selectedRoom = room;
  }
}
