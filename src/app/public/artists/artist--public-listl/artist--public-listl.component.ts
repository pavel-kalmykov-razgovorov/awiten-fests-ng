import { Component, OnInit } from '@angular/core';
import { Artist } from "../artist.model";
import { Subscription } from "rxjs";
import { PaginationInstance } from "ngx-pagination/dist/ngx-pagination";
import { ArtistService } from "../artist.service";
import { GenreService } from "../../../private/genres/genre.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: 'app-artist--public-listl',
  templateUrl: './artist--public-listl.component.html',
  styleUrls: ['./artist--public-listl.component.css']
})
export class ArtistPublicListlComponent implements OnInit {
  artists: Artist[];
  artistsSubscription: Subscription;
  config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 3,
    currentPage: 1
  };

  constructor(private artistService: ArtistService,
              private genresService: GenreService,
              private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.artistsSubscription = this.artistService.artistsChanged
      .subscribe((artists: Artist[]) => this.artists = artists);
    this.dataStorageService.getArtists();
  }

  ngOnDestroy() {
    this.artistsSubscription.unsubscribe();
  }
}
