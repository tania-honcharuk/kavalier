import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { SocialNetworksComponent } from './shared/social-networks/social-networks.component';
import { CardComponent } from './shared/card/card.component';
import { InfoCardComponent } from './shared/info-card/info-card.component';
import { BlogComponent } from './components/blog/blog.component';
import { MainComponent } from './pages/main/main.component';
import { AdvantagesComponent } from './components/advantages/advantages.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    SocialNetworksComponent,
    CardComponent,
    InfoCardComponent,
    BlogComponent,
    MainComponent,
    AdvantagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSelectModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
