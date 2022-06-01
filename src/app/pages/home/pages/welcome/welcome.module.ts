import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './welcome.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { BlogComponent } from './components/blog/blog.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    AdvantagesComponent,
    BlogComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
  ]
})
export class WelcomeModule { }
