import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Festival } from "../../../public/festivals/festival.model";
import { Subscription } from "rxjs";
import { FestivalService } from "../../../public/festivals/festival.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: 'app-festival-detail',
  templateUrl: './festival-detail.component.html',
  styleUrls: ['./festival-detail.component.css']
})
export class FestivalDetailComponent implements OnInit, OnDestroy {
  festival: Festival;
  id: number;

  subscription: Subscription;

  constructor(
    private festivalService: FestivalService,
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
          this.subscription = this.festivalService.festivalChanged
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
    this.subscription.unsubscribe();
  }
}
