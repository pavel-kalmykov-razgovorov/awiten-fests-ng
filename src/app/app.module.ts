import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { ArtistsComponent } from './artists/artists.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AppRoutingModule } from "./app-routing.module";
import { FestivalService } from "./festivals/festival.service";
import { ArtistService } from "./artists/artist.service";
import { DataStorageService } from "./shared/data-storage.service";

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
    AppRoutingModule,
    HttpModule
  ],
  providers: [FestivalService, ArtistService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
