import { Component, OnInit } from '@angular/core';
import { Artist } from "../../../public/artists/artist.model";
import { Subscription } from "rxjs";
import { ArtistService } from "../../../public/artists/artist.service";
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {
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
