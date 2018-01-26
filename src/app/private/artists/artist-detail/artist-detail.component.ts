import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Artist } from "../../../public/artists/artist.model";
import { Subscription } from "rxjs";
import { ArtistService } from "../../../public/artists/artist.service";
import { ActivatedRoute, Params } from "@angular/router";
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: 'app-artist-detail',
  templateUrl: './artist-detail.component.html',
  styleUrls: ['./artist-detail.component.css']
})
export class ArtistDetailComponent implements OnInit, OnDestroy {
  @Input() artist: Artist;
  @Input() id: number;

  subscription: Subscription;

  constructor(
    private artistService: ArtistService,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

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
