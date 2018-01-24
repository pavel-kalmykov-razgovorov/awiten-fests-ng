import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { FestivalService } from '../public/festivals/festival.service';
import { Festival } from '../public/festivals/festival.model';
import { ArtistService } from '../public/artists/artist.service';
import { Artist } from '../public/artists/artist.model';

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private festivalService: FestivalService,
    private artistService: ArtistService) {}

  getFestivals() {
    this.http.get('http://localhost:8000/api/festivals')
      .subscribe(
        (response: Response) => {
          const festivals: Festival[] = response.json().data;
          this.festivalService.setFestivals(festivals);
        }
      );
  }

  getArtists() {
    this.http.get('http://localhost:8000/api/artists')
      .subscribe(
        (response: Response) => {
          const artists: Artist[] = response.json().data;
          this.artistService.setArtists(artists);
        }
      );
  }
}
