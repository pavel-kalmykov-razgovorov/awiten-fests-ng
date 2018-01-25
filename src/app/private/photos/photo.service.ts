import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Photo } from "./photo.model";

@Injectable()
export class PhotoService {
  photosChanged = new Subject<Photo[]>();
  private photos: Photo[] = [];

  setPhotos(photos: Photo[]) {
    this.photos = photos;
    this.photosChanged.next(this.photos.slice());
  }

  getPhotos() {
    return this.photos.slice();
  }
}
