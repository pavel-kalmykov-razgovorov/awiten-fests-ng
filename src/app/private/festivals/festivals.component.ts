import { Component, OnInit, OnDestroy } from '@angular/core';
import { Festival } from '../../public/festivals/festival.model';
import { Subscription } from 'rxjs';
import { FestivalService } from '../../public/festivals/festival.service';
import { DataStorageService } from '../../shared/data-storage.service';

@Component({
  selector: 'app-private-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.css']
})
export class FestivalsPrivateComponent implements OnInit, OnDestroy {
  festivals: Festival[];
  subscription: Subscription;

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
