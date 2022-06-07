import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


import { HomeHeaderComponent } from './home-header.component';

@NgModule({
  declarations: [
    HomeHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeHeaderComponent
  ]
})
export class HomeHeaderModule { }