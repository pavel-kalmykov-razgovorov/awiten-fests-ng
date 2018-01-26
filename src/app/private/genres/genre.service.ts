import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Genre } from './genre.model';

@Injectable()
export class GenreService {
  genresChanged = new Subject<Genre[]>();
  genreChanged = new Subject<Genre>();
  private genres: Genre[] = [];
  private genre: Genre = undefined;

  setGenres(genres: Genre[]) {
    this.genres = genres;
    this.genresChanged.next(this.genres.slice());
  }

  setGenre(genre: Genre) {
    this.genre = genre;
    this.genreChanged.next(this.genre);
  }

  getGenres() {
    return this.genres.slice();
  }

  getGenre(id: number) {
    return this.genre;
  }

  addGenre(genre: Genre) {
    this.genres.push();
    this.genresChanged.next(this.genres.slice());
  }

  updateGenre(id: number, genre: Genre) {
    this.genres[id-1] = genre;
    this.genresChanged.next(this.genres.slice());
  }

  deleteGenre(id: number) {
    this.genres.splice(id-1, 1);
    this.genresChanged.next(this.genres.slice());
  }
}
