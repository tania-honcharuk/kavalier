import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';
import { BlogComponent } from './components/blog/blog.component';
import { CardComponent } from './components/card/card.component';
import { SuitesComponent } from './components/suites/suites.component';
import { ExploreCardComponent } from './components/explore-card/explore-card.component';
import { ExploreComponent } from './components/explore/explore.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderModule } from 'src/app/components/header/header.module';
import { WelcomeModule } from './components/welcome/welcome.module';

@NgModule({
  declarations: [
    MainComponent,
    AdvantagesComponent,
    BlogComponent,
    CardComponent,
    SuitesComponent,
    ExploreCardComponent,
    ExploreComponent,
    AboutComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    HeaderModule,
    WelcomeModule
  ]
})
export class MainModule { }
