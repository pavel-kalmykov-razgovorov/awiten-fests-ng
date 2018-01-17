import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { ArtistsComponent } from './artists/artists.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from "./app-routing.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FestivalsComponent,
    ArtistsComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
