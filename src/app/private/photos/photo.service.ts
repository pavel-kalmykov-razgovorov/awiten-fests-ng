import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Photo } from "./photo.model";

@Injectable()
export class PhotoService {
  photosChanged = new Subject<Photo[]>();
  photoChanged = new Subject<Photo>();
  private photos: Photo[] = [];
  private photo: Photo = undefined;

  setPhotos(photos: Photo[]) {
    this.photos = photos;
    this.photosChanged.next(this.photos.slice());
  }

  setPhoto(photo: Photo) {
    this.photo = photo;
    this.photoChanged.next(this.photo);
  }

  getPhotos() {
    return this.photos.slice();
  }

  getPhoto() {
    return this.photo;
  }
}
