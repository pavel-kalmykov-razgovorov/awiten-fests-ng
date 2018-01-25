import { Component, OnInit, OnDestroy } from '@angular/core';
import { Photo } from "./photo.model";
import { Subscription } from "rxjs/Subscription";
import { PhotoService } from "./photo.service";
import { DataStorageService } from "../../shared/data-storage.service";

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit, OnDestroy {
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
