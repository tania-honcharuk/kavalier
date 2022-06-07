import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CelebrationsComponent } from './celebrations.component';
import { CelebrationsRoutingModule } from './celebrations-routing.module';
import { HomeHeaderModule } from 'src/app/components/home-header/home-header.module';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';

@NgModule({
  declarations: [
    CelebrationsComponent
  ],
  imports: [
    CommonModule,
    CelebrationsRoutingModule,
    HomeHeaderModule,
    InfoCardModule
  ]
})
export class CelebrationsModule { }
