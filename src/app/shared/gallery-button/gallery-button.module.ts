import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GalleryButtonComponent } from './gallery-button.component';


@NgModule({
  declarations: [
    GalleryButtonComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GalleryButtonComponent
  ]
})
export class GalleryButtonModule { }