import {Component, OnDestroy, OnInit} from '@angular/core';
import {Festival} from '../festival.model';
import {Subscription} from 'rxjs';
import {FestivalService} from '../festival.service';
import {ActivatedRoute, Params, Router} from '@angular/router';
import {DataStorageService} from '../../../shared/data-storage.service';
import {Artist} from '../../artists/artist.model';
import {ArtistService} from '../../artists/artist.service';

@Component({
  selector: 'app-festival-public-detail',
  templateUrl: './festival-public-detail.component.html',
  styleUrls: ['./festival-public-detail.component.css']
})
export class FestivalPublicDetailComponent implements OnInit, OnDestroy {
  festivals: Festival[];
  artists: Artist[];
  id: number;

  artistsSubscription: Subscription;
  festivalSubscription: Subscription;
  festival: Festival;

  constructor(private festivalService: FestivalService,
              private artistService: ArtistService,
              private router: Router,
              private route: ActivatedRoute,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.dataStorageService.getFestival(this.id);
          this.festivalSubscription = this.festivalService.festivalChanged
            .subscribe(
              (festival: Festival) => {
                this.festival = festival;
              }
            );
          this.dataStorageService.getFestival(this.id);
        }
      );
  }

  ngOnDestroy() {
    this.artistsSubscription.unsubscribe();
  }
}
