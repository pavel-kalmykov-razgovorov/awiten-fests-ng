import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './public/welcome/welcome.component';
import { FestivalsComponent } from './public/festivals/festivals.component';
import { ArtistsComponent } from './public/artists/artists.component';
import {PublicComponent} from './public/public.component';
import {PrivateComponent} from './private/private.component';
import { SigninComponent } from './private/auth/signin/signin.component';
import { SignupComponent } from './private/auth/signup/signup.component';

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
