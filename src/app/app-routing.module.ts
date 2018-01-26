import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './public/welcome/welcome.component';
import { FestivalsComponent } from './public/festivals/festivals.component';
import { ArtistsComponent } from './public/artists/artists.component';
import {PublicComponent} from './public/public.component';
import {PrivateComponent} from './private/private.component';
import { SigninComponent } from './private/auth/signin/signin.component';
import { SignupComponent } from './private/auth/signup/signup.component';
import { GenresComponent } from './private/genres/genres.component';
import { PhotosComponent } from "./private/photos/photos.component";
import { PostsComponent } from "./private/posts/posts.component";
import { ArtistsPrivateComponent } from "./private/artists/artists.component";
import { FestivalsPrivateComponent } from "./private/festivals/festivals.component";
import { GenreDetailComponent } from "./private/genres/genre-detail/genre-detail.component";
import { GenreListComponent } from "./private/genres/genre-list/genre-list.component";
import { PhotosListComponent } from "./private/photos/photos-list/photos-list.component";
import { PhotoDetailComponent } from "./private/photos/photo-detail/photo-detail.component";
import { PostsListComponent } from "./private/posts/posts-list/posts-list.component";
import { PostDetailComponent } from "./private/posts/post-detail/post-detail.component";
import { FestivalListComponent } from "./private/festivals/festival-list/festival-list.component";
import { FestivalDetailComponent } from "./private/festivals/festival-detail/festival-detail.component";
import { ArtistsListComponent } from "./private/artists/artists-list/artists-list.component";
import { ArtistDetailComponent } from "./private/artists/artist-detail/artist-detail.component";

const appRoutes: Routes = [
  {
    path: 'web',
    component: PublicComponent,
    children: [
      {
        path: 'welcome',
        component: WelcomeComponent,
      },
      {
        path: 'festivals',
        component: FestivalsComponent
      },
      {
        path: 'artists',
        component: ArtistsComponent
      }
    ]
  },
  {
    path: 'admin',
    component: PrivateComponent,
    children: [
      {
        path: 'signin',
        component: SigninComponent
      },
      {
        path: 'signup',
        component: SignupComponent
      },
      {
        path: 'genres',
        component: GenresComponent,
        children: [
          {
            path: '',
            component: GenreListComponent
          },
          {
            path: ':id',
            component: GenreDetailComponent
          }
        ]
      },
      {
        path: 'photos',
        component: PhotosComponent,
        children: [
          {
            path: '',
            component: PhotosListComponent
          },
          {
            path: ':id',
            component: PhotoDetailComponent
          }
        ]
      },
      {
        path: 'posts',
        component: PostsComponent,
        children: [
          {
            path: '',
            component: PostsListComponent
          },
          {
            path: ':id',
            component: PostDetailComponent
          }
        ]
      },
      {
        path: 'festivals',
        component: FestivalsPrivateComponent,
        children: [
          {
            path: '',
            component: FestivalListComponent
          },
          {
            path: ':id',
            component: FestivalDetailComponent
          }
        ]
      },
      {
        path: 'artists',
        component: ArtistsPrivateComponent,
        children: [
          {
            path: '',
            component: ArtistsListComponent
          },
          {
            path: ':id',
            component: ArtistDetailComponent
          }
        ]
      }
    ]
  },
  {
    path: '',
    redirectTo: 'web/welcome',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
