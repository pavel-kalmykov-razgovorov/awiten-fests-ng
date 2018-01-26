import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Genre } from '../genre.model';
import { GenreService } from '../genre.service';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit, OnDestroy {
  @Input() genres: Genre[];
  @Input() id: number;

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
