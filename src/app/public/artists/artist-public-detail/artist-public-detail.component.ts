import { Component, OnInit } from '@angular/core';
import { Festival } from "../../festivals/festival.model";
import { Subscription } from "rxjs";
import { FestivalService } from "../../festivals/festival.service";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: 'app-artist-public-detail',
  templateUrl: './artist-public-detail.component.html',
  styleUrls: ['./artist-public-detail.component.css']
})
export class ArtistPublicDetailComponent implements OnInit {
  festivals: Festival[];
  id: number;

  subscription: Subscription;

  constructor(
    private festivalService: FestivalService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.subscription = this.festivalService.festivalsChanged
      .subscribe(
        (festivals: Festival[]) => {
          this.festivals = festivals;
        }
      );
    this.dataStorageService.getFestivals();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
