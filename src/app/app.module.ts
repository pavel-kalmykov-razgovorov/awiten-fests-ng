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
import { LeftMenuComponent } from "./private/left-menu/left-menu.component";
import { PrivateHeaderComponent } from "./private/private-header/private-header.component";
import { SigninComponent } from './private/auth/signin/signin.component';
import { SignupComponent } from './private/auth/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from "./private/auth/auth.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FestivalsComponent,
    ArtistsComponent,
    WelcomeComponent,
    PublicComponent,
    PrivateComponent,
    FooterComponent,
    PrivateHeaderComponent,
    LeftMenuComponent,
    SigninComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [FestivalService, ArtistService, DataStorageService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
