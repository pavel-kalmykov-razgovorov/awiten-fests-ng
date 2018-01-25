import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

import { Genre } from './genre.model';

export class GenreService {
  genresChanged = new Subject<Genre[]>();
  private genres: Genre[] = [];

  setGenres(genres: Genre[]) {
    this.genres = genres;
    this.genresChanged.next(this.genres.slice());
  }

  getGenres() {
    return this.genres.slice();
  }
}
