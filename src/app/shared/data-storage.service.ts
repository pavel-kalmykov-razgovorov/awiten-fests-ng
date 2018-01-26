import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';

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
  private size = 99999; // Forgive me!
  constructor(
    private http: Http,
    private festivalService: FestivalService,
    private artistService: ArtistService,
    private genreService: GenreService,
    private photoService: PhotoService,
    private postService: PostService) {}

  private addContentTypeHeader(headers: Headers) {
    headers.append('Content-type', 'application/json');
  }

  private addAcceptHeader(headers: Headers) {
    headers.append('Accept', 'application/json');
  }

  private addAuthentication(headers: Headers) {
    headers.append('Authorization', `Bearer ${localStorage.token}`);
  }

  getFestivals() {
    this.http.get(`http://localhost:8000/api/festivals?size=${this.size}`)
      .subscribe(
        (response: Response) => {
          const festivals: Festival[] = response.json().data;
          this.festivalService.setFestivals(festivals);
        }
      );
  }

  getFestival(id: number) {
    this.http.get(`http://localhost:8000/api/festivals/${id}`)
      .subscribe(
        (response: Response) => {
          const festival: Festival = response.json().data;
          this.festivalService.setFestival(festival);
        }
      );
  }

  addFestival(values: string[]) {
    const headers = new Headers();
    this.addContentTypeHeader(headers);
    this.addAuthentication(headers);
    this.addAcceptHeader(headers);
    this.http.post('http://localhost:8000/api/festivals/', JSON.stringify({
      name: values[0],
      location: values[1],
      province: values[2],
      date: values[3],
      logoUrl: values[4]
    }), { headers: headers })
      .subscribe(
        (response: Response) => {
          const festival: Festival = response.json().data;
          this.festivalService.addFestival(festival);
        }
      )
  }

  updateFestival(id: number, values: string[]) {
    const headers = new Headers();
    this.addContentTypeHeader(headers);
    this.addAuthentication(headers);
    this.addAcceptHeader(headers);
    this.http.put(`http://localhost:8000/api/festivals/${id}`, JSON.stringify({
      name: values[0],
      location: values[1],
      province: values[2],
      date: values[3],
      logoUrl: values[4]
    }), { headers: headers })
      .subscribe(
        (response: Response) => {
          const festival: Festival = response.json().data;
          this.festivalService.updateFestival(id, festival);
        }
      )
  }

  deleteFestival(id: number) {
    const headers = new Headers();
    this.addContentTypeHeader(headers);
    this.addAuthentication(headers);
    this.addAcceptHeader(headers);
    this.http.delete(`http://localhost:8000/api/festivals/${id}`, { headers: headers })
      .subscribe(
        (response: Response) => {
          this.festivalService.deleteFestival(id);
        }
      )
  }

  getArtists() {
    this.http.get(`http://localhost:8000/api/artists?size=${this.size}`)
      .subscribe(
        (response: Response) => {
          const artists: Artist[] = response.json().data;
          this.artistService.setArtists(artists);
        }
      );
  }

  getArtist(id: number) {
    this.http.get(`http://localhost:8000/api/artists/${id}`)
      .subscribe(
        (response: Response) => {
          const artists: Artist = response.json().data;
          this.artistService.setArtist(artists);
        }
      );
  }

  getGenres() {
    this.http.get(`http://localhost:8000/api/genres?size=${this.size}`)
      .subscribe(
        (response: Response) => {
          const genres: Genre[] = response.json().data;
          this.genreService.setGenres(genres);
        }
      );
  }

  getGenre(id: number) {
    this.http.get(`http://localhost:8000/api/genres/${id}`)
      .subscribe(
        (response: Response) => {
          const genre: Genre = response.json().data;
          this.genreService.setGenre(genre);
        }
      );
  }

  addGenre(name: string) {
    const headers = new Headers();
    this.addContentTypeHeader(headers);
    this.addAuthentication(headers);
    this.addAcceptHeader(headers);
    this.http.post('http://localhost:8000/api/genres/', JSON.stringify({
      name: name,
    }), { headers: headers })
      .subscribe(
        (response: Response) => {
          const genre: Genre = response.json().data;
          this.genreService.addGenre(genre);
        }
      )
  }

  updateGenre(id: number, name: string) {
    const headers = new Headers();
    this.addContentTypeHeader(headers);
    this.addAuthentication(headers);
    this.addAcceptHeader(headers);
    this.http.put(`http://localhost:8000/api/genres/${id}`, JSON.stringify({
      name: name,
    }), { headers: headers })
      .subscribe(
        (response: Response) => {
          const genre: Genre = response.json().data;
          this.genreService.updateGenre(id, genre);
        }
      )
  }

  deleteGenre(id: number) {
    const headers = new Headers();
    this.addContentTypeHeader(headers);
    this.addAuthentication(headers);
    this.addAcceptHeader(headers);
    this.http.delete(`http://localhost:8000/api/genres/${id}`, { headers: headers })
      .subscribe(
        (response: Response) => {
          this.genreService.deleteGenre(id);
        }
      )
  }

  getPhotos() {
    this.http.get(`http://localhost:8000/api/photos?size=${this.size}`)
      .subscribe(
        (response: Response) => {
          const photos: Photo[] = response.json().data;
          this.photoService.setPhotos(photos);
        }
      );
  }

  getPhoto(id: number) {
    this.http.get(`http://localhost:8000/api/photos/${id}`)
      .subscribe(
        (response: Response) => {
          const photo: Photo = response.json().data;
          this.photoService.setPhoto(photo);
        }
      );
  }

  getPosts() {
    this.http.get(`http://localhost:8000/api/posts?size=${this.size}`)
      .subscribe(
        (response: Response) => {
          const posts: Post[] = response.json().data;
          this.postService.setPosts(posts);
        }
      );
  }

  getPost(id: number) {
    this.http.get(`http://localhost:8000/api/posts/${id}`)
      .subscribe(
        (response: Response) => {
          const post: Post = response.json().data;
          this.postService.setPost(post);
        }
      );
  }
}
