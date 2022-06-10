import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeComponent } from './welcome.component';
import { GalleryButtonModule } from 'src/app/shared/gallery-button/gallery-button.module';

@NgModule({
  declarations: [
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    GalleryButtonModule
  ],
  exports: [
    WelcomeComponent
  ]
})
export class WelcomeModule { }