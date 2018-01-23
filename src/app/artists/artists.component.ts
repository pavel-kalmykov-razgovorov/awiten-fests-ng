import { Component, OnInit, OnDestroy } from '@angular/core';

import { Artist } from "./artist.model";
import { ArtistService } from "./artist.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent implements OnInit, OnDestroy {
  artists: Artist[];
  subscription: Subscription;

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.subscription = this.artistService.artistsChanged
      .subscribe(
        (artists: Artist[]) => {
          this.artists = artists;
        }
      );
    this.artists = this.artistService.getArtists();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
