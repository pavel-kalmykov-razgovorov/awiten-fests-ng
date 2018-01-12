import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FestivalsListComponent } from './festivals/festivals-list/festivals-list.component';
import { ArtistsListComponent } from './artists/artists-list/artists-list.component';
import { FestivalsComponent } from './festivals/festivals.component';
import { ArtistsComponent } from './artists/artists.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FestivalsListComponent,
    ArtistsListComponent,
    FestivalsComponent,
    ArtistsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
