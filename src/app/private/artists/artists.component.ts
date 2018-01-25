import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { DataStorageService } from '../../shared/data-storage.service';
import { Artist } from '../../public/artists/artist.model';
import { ArtistService } from '../../public/artists/artist.service';

@Component({
  selector: 'app-private-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsPrivateComponent implements OnInit, OnDestroy {
  artists: Artist[];
  subscription: Subscription;

  constructor(
    private artistService: ArtistService,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.subscription = this.artistService.artistsChanged
      .subscribe(
        (artists: Artist[]) => {
          this.artists = artists;
        }
      );
    this.dataStorageService.getArtists();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
