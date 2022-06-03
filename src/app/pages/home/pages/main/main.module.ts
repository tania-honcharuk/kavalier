import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { BlogComponent } from './components/blog/blog.component';
import { CardComponent } from './components/card/card.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SuitesComponent } from './components/suites/suites.component';

@NgModule({
  declarations: [
    MainComponent,
    AdvantagesComponent,
    BlogComponent,
    CardComponent,
    WelcomeComponent,
    SuitesComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
  ]
})
export class MainModule { }
