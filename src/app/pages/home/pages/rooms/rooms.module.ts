import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoomsRoutingModule } from './rooms-routing.module';
import { RoomsComponent } from './rooms.component';
import { HomeHeaderModule } from 'src/app/components/home-header/home-header.module';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';


@NgModule({
  declarations: [
    RoomsComponent,
  ],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    HomeHeaderModule,
    InfoCardModule
  ]
})
export class RoomsModule { }