import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    HeaderModule
  ]
})
export class ContactModule { }
