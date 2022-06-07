import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InfoCardComponent } from './info-card.component';
import { GalleryButtonModule } from 'src/app/shared/gallery-button/gallery-button.module';

@NgModule({
  declarations: [
    InfoCardComponent
  ],
  imports: [
    CommonModule,
    GalleryButtonModule
  ],
  exports: [
    InfoCardComponent
  ]
})
export class InfoCardModule { }