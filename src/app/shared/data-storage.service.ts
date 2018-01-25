import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { FestivalService } from '../public/festivals/festival.service';
import { Festival } from '../public/festivals/festival.model';
import { ArtistService } from '../public/artists/artist.service';
import { Artist } from '../public/artists/artist.model';
import { Genre } from "../private/genres/genre.model";
import { GenreService } from "../private/genres/genre.service";
import { Photo } from "../private/photos/photo.model";
import { Post } from "../private/posts/post.model";
import { PhotoService } from "../private/photos/photo.service";
import { PostService } from "../private/posts/post.service";

@Injectable()
export class DataStorageService {
  constructor(
    private http: Http,
    private festivalService: FestivalService,
    private artistService: ArtistService,
    private genreService: GenreService,
    private photoService: PhotoService,
    private postService: PostService) {}

  getFestivals() {
    this.http.get('http://localhost:8000/api/festivals')
      .subscribe(
        (response: Response) => {
          const festivals: Festival[] = response.json().data;
          this.festivalService.setFestivals(festivals);
        }
      );
  }

  getArtists() {
    this.http.get('http://localhost:8000/api/artists')
      .subscribe(
        (response: Response) => {
          const artists: Artist[] = response.json().data;
          this.artistService.setArtists(artists);
        }
      );
  }

  getGenres() {
    this.http.get('http://localhost:8000/api/genres')
      .subscribe(
        (response: Response) => {
          const genres: Genre[] = response.json().data;
          this.genreService.setGenres(genres);
        }
      );
  }

  getPhotos() {
    this.http.get('http://localhost:8000/api/photos')
      .subscribe(
        (response: Response) => {
          const photos: Photo[] = response.json().data;
          this.photoService.setPhotos(photos);
        }
      );
  }

  getPosts() {
    this.http.get('http://localhost:8000/api/posts')
      .subscribe(
        (response: Response) => {
          const posts: Post[] = response.json().data;
          this.postService.setPosts(posts);
        }
      );
  }
}
