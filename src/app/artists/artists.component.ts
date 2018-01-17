import { Component, OnInit } from '@angular/core';

import { Artist } from "./artist.model";
import { ArtistService } from "./artist.service";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
  providers: [ArtistService]
})
export class ArtistsComponent implements OnInit {
  artists: Artist[];
  constructor(private artistService: ArtistService) { }

  ngOnInit() {
    this.artists = this.artistService.getArtists();
  }

}
