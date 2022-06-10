import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryComponent } from './gallery.component';
import { GalleryRoutingModule } from './gallery-routing.module';
import { HomeHeaderModule } from 'src/app/components/home-header/home-header.module';
import { InfoCardModule } from 'src/app/components/info-card/info-card.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    GalleryComponent
  ],
  imports: [
    CommonModule,
    GalleryRoutingModule,
    HomeHeaderModule,
    InfoCardModule,
    HeaderModule
  ]
})
export class GalleryModule { }
