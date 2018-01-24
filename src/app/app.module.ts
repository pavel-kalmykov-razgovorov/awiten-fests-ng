import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './public/header/header.component';
import { FestivalsComponent } from './public/festivals/festivals.component';
import { ArtistsComponent } from './public/artists/artists.component';
import { WelcomeComponent } from './public/welcome/welcome.component';
import { AppRoutingModule } from './app-routing.module';
import { FestivalService } from './public/festivals/festival.service';
import { ArtistService } from './public/artists/artist.service';
import { DataStorageService } from './shared/data-storage.service';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';
import { FooterComponent } from './public/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FestivalsComponent,
    ArtistsComponent,
    WelcomeComponent,
    PublicComponent,
    PrivateComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
  ],
  providers: [FestivalService, ArtistService, DataStorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
