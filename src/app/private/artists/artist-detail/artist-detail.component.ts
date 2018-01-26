import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Artist } from "../../../public/artists/artist.model";
import { Subscription } from "rxjs";
import { ArtistService } from "../../../public/artists/artist.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit, OnDestroy {
  artist: Artist;
  id: number;

  subscription: Subscription;

  constructor(
    private artistService: ArtistService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

  onEditFestival(id: number) {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.subscription = this.artistService.artistChanged
            .subscribe(
              (artist: Artist) => {
                this.artist = artist;
              }
            );
          this.dataStorageService.getArtist(this.id);
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
