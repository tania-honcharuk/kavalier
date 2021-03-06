import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConferencesComponent } from './conferences.component';
import { ConferencesRoutingModule } from './conferences-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    ConferencesComponent
  ],
  imports: [
    CommonModule,
    ConferencesRoutingModule,
    HeaderModule
  ]
})
export class ConferencesModule { }
