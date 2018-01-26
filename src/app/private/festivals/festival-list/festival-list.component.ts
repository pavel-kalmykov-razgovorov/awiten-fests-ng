import { Component, OnInit, OnDestroy } from '@angular/core';
import { Festival } from '../../../public/festivals/festival.model';
import { Subscription } from 'rxjs';
import { FestivalService } from '../../../public/festivals/festival.service';
import { DataStorageService } from '../../../shared/data-storage.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-festival-list',
  templateUrl: './festival-list.component.html',
  styleUrls: ['./festival-list.component.css']
})
export class FestivalListComponent implements OnInit, OnDestroy {
  festivals: Festival[];
  id: number;

  subscription: Subscription;

  constructor(
    private festivalService: FestivalService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

  onNewFestival() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEditFestival(id: number) {
    this.router.navigate([`${id}/edit`], { relativeTo: this.route });
  }

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
