import { Component, OnInit } from '@angular/core';
import { Festival } from "../festival.model";
import { Subscription } from "rxjs";
import { FestivalService } from "../festival.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DataStorageService } from "../../../shared/data-storage.service";
import { Artist } from "../../artists/artist.model";
import { ArtistService } from "../../artists/artist.service";

@Component({
  selector: 'app-festival-public-detail',
  templateUrl: './festival-public-detail.component.html',
  styleUrls: ['./festival-public-detail.component.css']
})
export class FestivalPublicDetailComponent implements OnInit {
  festivals: Festival[];
  artists: Artist[];
  id: number;

  subscription: Subscription;

  constructor(
    private festivalService: FestivalService,
    private artistService: ArtistService,
    private router: Router,
    private route: ActivatedRoute,
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
