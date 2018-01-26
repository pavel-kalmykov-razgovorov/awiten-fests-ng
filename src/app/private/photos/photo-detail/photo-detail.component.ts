import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Photo } from "../photo.model";
import { Subscription } from "rxjs";
import { PhotoService } from "../photo.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.css']
})
export class PhotoDetailComponent implements OnInit, OnDestroy {
  @Input() photo: Photo;
  @Input() id: number;

  subscription: Subscription;

  constructor(
    private photoService: PhotoService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.subscription = this.photoService.photoChanged
            .subscribe(
              (photo: Photo) => {
                this.photo = photo;
              }
            );
          this.dataStorageService.getPhoto(this.id);
        }
      );
  }

  onEditPhoto(id: number) {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
