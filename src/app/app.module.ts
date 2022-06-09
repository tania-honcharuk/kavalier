import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FooterComponent } from './components/footer/footer.component';
import { SocialNetworksComponent } from './shared/social-networks/social-networks.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SocialNetworksComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
