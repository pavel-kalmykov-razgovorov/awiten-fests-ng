import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from "./welcome/welcome.component";
import { FestivalsComponent } from "./festivals/festivals.component";
import { ArtistsComponent } from "./artists/artists.component";

const appRoutes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'festivals', component: FestivalsComponent },
  { path: 'artists', component: ArtistsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
