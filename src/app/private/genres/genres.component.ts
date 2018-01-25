import { Component, OnInit, OnDestroy } from '@angular/core';
import { Genre } from "./genre.model";
import { Subscription } from "rxjs/Subscription";
import { GenreService } from "./genre.service";
import { DataStorageService } from "../../shared/data-storage.service";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit, OnDestroy {
  genres: Genre[];
  subscription: Subscription;

  constructor(
    private genreService: GenreService,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.subscription = this.genreService.genresChanged
      .subscribe(
        (genres: Genre[]) => {
          this.genres = genres;
        }
      );
    this.dataStorageService.getGenres();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
