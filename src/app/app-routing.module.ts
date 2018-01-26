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
import { GenreEditComponent } from "./private/genres/genre-edit/genre-edit.component";
import { ArtistEditComponent } from "./private/artists/artist-edit/artist-edit.component";
import { FestivalEditComponent } from "./private/festivals/festival-edit/festival-edit.component";
import { PostEditComponent } from "./private/posts/post-edit/post-edit.component";
import { PhotoEditComponent } from "./private/photos/photo-edit/photo-edit.component";
import { FestivalPublicDetailComponent } from "./public/festivals/festival-public-detail/festival-public-detail.component";
import { ArtistPublicDetailComponent } from "./public/artists/artist-public-detail/artist-public-detail.component";
import { FestivalsPublicListlComponent } from "./public/festivals/festivals-public-listl/festivals-public-listl.component";
import { ArtistPublicListlComponent } from "./public/artists/artist--public-listl/artist--public-listl.component";

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
        component: FestivalsComponent,
        children: [
          {
            path: '',
            component: FestivalsPublicListlComponent
          },
          {
            path: ':id',
            component: FestivalPublicDetailComponent
          }
        ]
      },
      {
        path: 'artists',
        component: ArtistsComponent,
        children: [
          {
            path: '',
            component: ArtistPublicListlComponent
          },
          {
            path: ':id',
            component: ArtistPublicDetailComponent
          }
        ]
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
            path: 'new',
            component: GenreEditComponent
          },
          {
            path: ':id',
            component: GenreDetailComponent
          },
          {
            path: ':id/edit',
            component: GenreEditComponent
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
            path: 'new',
            component: PhotoEditComponent
          },
          {
            path: ':id',
            component: PhotoDetailComponent
          },
          {
            path: ':id/edit',
            component: PhotoEditComponent
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
            path: 'new',
            component: PostEditComponent
          },
          {
            path: ':id',
            component: PostDetailComponent
          },
          {
            path: ':id/edit',
            component: PostEditComponent
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
            path: 'new',
            component: FestivalEditComponent
          },
          {
            path: ':id',
            component: FestivalDetailComponent
          },
          {
            path: ':id/edit',
            component: FestivalEditComponent
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
            path: 'new',
            component: ArtistEditComponent
          },
          {
            path: ':id',
            component: ArtistDetailComponent
          },
          {
            path: ':id/edit',
            component: ArtistEditComponent
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
