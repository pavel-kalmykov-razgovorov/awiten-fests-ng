import { Component, OnInit } from '@angular/core';
import { Festival } from "../festival.model";
import { Subscription } from "rxjs";
import { PaginationInstance } from "ngx-pagination/dist/ngx-pagination";
import { FestivalService } from "../festival.service";
import { Router, ActivatedRoute } from "@angular/router";
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: 'app-festivals-public-listl',
  templateUrl: './festivals-public-listl.component.html',
  styleUrls: ['./festivals-public-listl.component.css']
})
export class FestivalsPublicListlComponent implements OnInit {
  festivals: Festival[];
  subscription: Subscription;
  config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 3,
    currentPage: 1
  };

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
}
