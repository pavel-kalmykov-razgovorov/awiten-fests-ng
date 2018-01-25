import { Component, OnInit, OnDestroy } from '@angular/core';

import { Festival } from './festival.model';
import { FestivalService } from './festival.service';
import { Subscription } from 'rxjs/Subscription';
import { DataStorageService } from '../../shared/data-storage.service';
import {PaginationInstance} from 'ngx-pagination';

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.css'],
})
export class FestivalsComponent implements OnInit, OnDestroy {
  festivals: Festival[];
  subscription: Subscription;
  config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 3,
    currentPage: 1
  };

  constructor(
    private festivalService: FestivalService,
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
