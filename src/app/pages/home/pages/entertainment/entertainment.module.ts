import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EntertainmentComponent } from './entertainment.component';
import { EnterteinmentRoutingModule } from './entertainment-routing.module';
import { HomeHeaderModule } from 'src/app/components/home-header/home-header.module';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    EntertainmentComponent,
  ],
  imports: [
    CommonModule,
    EnterteinmentRoutingModule,
    HomeHeaderModule,
    InfoCardModule,
    HeaderModule
  ]
})
export class EntertainmentModule { }
