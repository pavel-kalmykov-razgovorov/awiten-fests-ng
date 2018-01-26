import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo } from "../photo.model";
import { Subscription } from "rxjs";
import { PhotoService } from "../photo.service";
import { DataStorageService } from "../../../shared/data-storage.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit, OnDestroy {
  photos: Photo[];
  id: number;

  subscription: Subscription;

  constructor(
    private photoService: PhotoService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

  onNewPhoto() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEditPhoto(id: number) {
    this.router.navigate([`${id}/edit`], { relativeTo: this.route });
  }

  onDeletePhoto(id: number) {
    this.dataStorageService.deletePhoto(id);
    this.router.navigate(['/admin/photos'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.subscription = this.photoService.photosChanged
      .subscribe(
        (photos: Photo[]) => {
          this.photos = photos;
        }
      );
    this.dataStorageService.getPhotos();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
