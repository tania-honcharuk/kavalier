import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuitesComponent } from './suites.component';
import { SuitesRoutingModule } from './suites-routing.module';


@NgModule({
  declarations: [
    SuitesComponent
  ],
  imports: [
    CommonModule,
    SuitesRoutingModule
  ]
})
export class SuitesModule { }