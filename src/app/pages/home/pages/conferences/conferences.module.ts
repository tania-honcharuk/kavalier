import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConferencesComponent } from './conferences.component';
import { ConferencesRoutingModule } from './conferences-routing.module';

@NgModule({
  declarations: [
    ConferencesComponent
  ],
  imports: [
    CommonModule,
    ConferencesRoutingModule
  ]
})
export class ConferencesModule { }
