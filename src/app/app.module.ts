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
import { LeftMenuComponent } from './private/left-menu/left-menu.component';
import { PrivateHeaderComponent } from './private/private-header/private-header.component';
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
import { GenreFilterComponent } from './public/genre-filter/genre-filter.component';
import { NameFilterComponent } from './public/name-filter/name-filter.component';
import { PhotoService } from './private/photos/photo.service';
import { PostService } from './private/posts/post.service';
import { FestivalsPrivateComponent } from './private/festivals/festivals.component';
import { ArtistsPrivateComponent } from './private/artists/artists.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { GenreListComponent } from './private/genres/genre-list/genre-list.component';
import { PhotosListComponent } from './private/photos/photos-list/photos-list.component';
import { PostsListComponent } from './private/posts/posts-list/posts-list.component';
import { FestivalListComponent } from './private/festivals/festival-list/festival-list.component';
import { FestivalDetailComponent } from './private/festivals/festival-detail/festival-detail.component';
import { ArtistsListComponent } from './private/artists/artists-list/artists-list.component';
import { ArtistDetailComponent } from './private/artists/artist-detail/artist-detail.component';
import { GenreEditComponent } from './private/genres/genre-edit/genre-edit.component';
import { FestivalEditComponent } from './private/festivals/festival-edit/festival-edit.component';
import { ArtistEditComponent } from './private/artists/artist-edit/artist-edit.component';
import { PhotoEditComponent } from './private/photos/photo-edit/photo-edit.component';
import { PostEditComponent } from './private/posts/post-edit/post-edit.component';

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
    GenreFilterComponent,
    NameFilterComponent,
    ArtistsPrivateComponent,
    FestivalsPrivateComponent,
    GenreListComponent,
    PhotosListComponent,
    PostsListComponent,
    FestivalListComponent,
    FestivalDetailComponent,
    ArtistsListComponent,
    ArtistDetailComponent,
    GenreEditComponent,
    FestivalEditComponent,
    ArtistEditComponent,
    PhotoEditComponent,
    PostEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    DataTableModule,
    NgxPaginationModule
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
