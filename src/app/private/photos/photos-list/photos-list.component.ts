import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo } from "../photo.model";
import { Subscription } from "rxjs";
import { PhotoService } from "../photo.service";
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.component.html',
  styleUrls: ['./photos-list.component.css']
})
export class PhotosListComponent implements OnInit, OnDestroy {
  photos: Photo[];
  subscription: Subscription;

  constructor(
    private photoService: PhotoService,
    private dataStorageService: DataStorageService) { }

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
