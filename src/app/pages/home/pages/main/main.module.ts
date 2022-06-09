import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { BlogComponent } from './components/blog/blog.component';
import { CardComponent } from './components/card/card.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SuitesComponent } from './components/suites/suites.component';
import { ExploreCardComponent } from './components/explore-card/explore-card.component';
import { ExploreComponent } from './components/explore/explore.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderModule } from 'src/app/components/header/header.module';

@NgModule({
  declarations: [
    MainComponent,
    AdvantagesComponent,
    BlogComponent,
    CardComponent,
    WelcomeComponent,
    SuitesComponent,
    ExploreCardComponent,
    ExploreComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HeaderModule
  ]
})
export class MainModule { }
