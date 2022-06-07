import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VinariumComponent } from './vinarium.component';
import { VinariumRoutingModule } from './vinarium-routing.module';
import { HomeHeaderModule } from 'src/app/components/home-header/home-header.module';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';

@NgModule({
  declarations: [
    VinariumComponent
  ],
  imports: [
    CommonModule,
    VinariumRoutingModule,
    HomeHeaderModule,
    InfoCardModule
  ]
})
export class VinariumModule { }
