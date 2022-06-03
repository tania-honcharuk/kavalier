import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';
// import { HeaderComponent } from './components/header/header.component';
import { SocialNetworksComponent } from './shared/social-networks/social-networks.component';
// import { CardComponent } from './shared/card/card.component';
import { InfoCardComponent } from './shared/info-card/info-card.component';
// import { BlogComponent } from './components/blog/blog.component';
// import { MainComponent } from './pages/main/main.component';
// import { AdvantagesComponent } from './components/advantages/advantages.component';
// import { WelcomeComponent } from './pages/home/home-section.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { GalleryButtonComponent } from './shared/gallery-button/gallery-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    // HeaderComponent,
    SocialNetworksComponent,
    // CardComponent,
    InfoCardComponent,
    // BlogComponent,
    // MainComponent,
    // AdvantagesComponent,
    // HomeSectionComponent,
    RoomsComponent,
    GalleryButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
