import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Artist } from './artist.model';

@Injectable()
export class ArtistService {
  artistsChanged = new Subject<Artist[]>();
  artistChanged = new Subject<Artist>();
  private artists: Artist[] = [];
  private artist: Artist = undefined;

  setArtists(artists: Artist[]) {
    this.artists = artists;
    this.artistsChanged.next(this.artists.slice());
  }

  setArtist(artist: Artist) {
    this.artist = artist;
    this.artistChanged.next(this.artist);
  }

  getArtists() {
    return this.artists.slice();
  }

  getArtist() {
    return this.artist;
  }

  addArtist(artist: Artist) {
    this.artists.push();
    this.artistsChanged.next(this.artists.slice());
  }

  updateArtist(id: number, artist: Artist) {
    this.artists[id-1] = artist;
    this.artistsChanged.next(this.artists.slice());
  }

  deleteArtist(id: number) {
    this.artists.splice(id-1, 1);
    this.artistsChanged.next(this.artists.slice());
  }
}
