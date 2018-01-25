import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Artist } from './artist.model';

@Injectable()
export class ArtistService {
  artistsChanged = new Subject<Artist[]>();
  private artists: Artist[] = [];

  setArtists(artists: Artist[]) {
    this.artists = artists;
    this.artistsChanged.next(this.artists.slice());
  }

  getArtists() {
    return this.artists.slice();
  }
}
