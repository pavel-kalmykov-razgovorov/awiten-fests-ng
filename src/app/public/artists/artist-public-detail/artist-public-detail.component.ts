import {Component, OnDestroy, OnInit} from '@angular/core';
import { Festival } from '../../festivals/festival.model';
import { Subscription } from 'rxjs';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { DataStorageService } from '../../../shared/data-storage.service';
import {Artist} from '../artist.model';
import {ArtistService} from '../artist.service';

@Component({
  selector: 'app-artist-public-detail',
  templateUrl: './artist-public-detail.component.html',
  styleUrls: ['./artist-public-detail.component.css']
})
export class ArtistPublicDetailComponent implements OnInit, OnDestroy {
  festivals: Festival[];
  id: number;

  subscription: Subscription;
  private artist: Artist;
  private artistSubscription: Subscription;

  constructor(
    private artistService: ArtistService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.dataStorageService.getArtist(this.id);
          this.artistSubscription = this.artistService.artistChanged
            .subscribe(
              (artist: Artist) => {
                this.artist = artist;
              }
            );
          this.dataStorageService.getFestival(this.id);
        }
      );
  }
}
