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
        component: GenresComponent
      },
      {
        path: 'photos',
        component: PhotosComponent
      },
      {
        path: 'posts',
        component: PostsComponent
      },
      {
        path: 'festivals',
        component: FestivalsPrivateComponent
      },
      {
        path: 'artists',
        component: ArtistsPrivateComponent
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
