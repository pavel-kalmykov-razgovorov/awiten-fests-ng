import {Component, OnDestroy, OnInit} from '@angular/core';

import {Artist} from './artist.model';
import {ArtistService} from './artist.service';
import {Subscription} from 'rxjs/Subscription';
import {DataStorageService} from '../../shared/data-storage.service';
import {GenreService} from '../../private/genres/genre.service';
import {PaginationInstance} from 'ngx-pagination';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css'],
})
export class ArtistsComponent implements OnInit, OnDestroy {
  artists: Artist[];
  artistsSubscription: Subscription;
  config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 3,
    currentPage: 1
  };

  constructor(private artistService: ArtistService,
              private genresService: GenreService,
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
