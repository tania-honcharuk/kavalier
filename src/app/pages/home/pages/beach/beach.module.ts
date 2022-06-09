import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BeachComponent } from './beach.component';
import { BeachRoutingModule } from './beach-routing.module';
import { HomeHeaderModule } from 'src/app/components/home-header/home-header.module';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    BeachComponent,
  ],
  imports: [
    CommonModule,
    BeachRoutingModule,
    HomeHeaderModule,
    InfoCardModule,
    HeaderModule
  ]
})
export class BeachModule { }
