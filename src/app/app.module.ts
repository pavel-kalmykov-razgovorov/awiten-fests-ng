import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { DataTableModule } from 'angular2-datatable';

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
import { AuthService } from './private/auth/auth.service';
import { GenresComponent } from './private/genres/genres.component';
import { GenreService } from './private/genres/genre.service';
import { GenreDetailComponent } from './private/genres/genre-detail/genre-detail.component';
import { PhotosComponent } from './private/photos/photos.component';
import { PostsComponent } from './private/posts/posts.component';
import { PhotoDetailComponent } from './private/photos/photo-detail/photo-detail.component';
import { PostDetailComponent } from './private/posts/post-detail/post-detail.component';
import { PhotoService } from './private/photos/photo.service';
import { PostService } from './private/posts/post.service';
import { FestivalsPrivateComponent } from './private/festivals/festivals.component';
import { ArtistsPrivateComponent } from './private/artists/artists.component';
import { GenreListComponent } from './private/genres/genre-list/genre-list.component';

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
    SignupComponent,
    GenresComponent,
    GenreDetailComponent,
    PhotosComponent,
    PostsComponent,
    PhotoDetailComponent,
    PostDetailComponent,
    ArtistsPrivateComponent,
    FestivalsPrivateComponent,
    GenreListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    DataTableModule
  ],
  providers: [
    FestivalService,
    ArtistService,
    DataStorageService,
    AuthService,
    GenreService,
    PhotoService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
