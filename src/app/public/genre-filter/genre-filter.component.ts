import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';
import {Genre} from '../../private/genres/genre.model';
import {DataStorageService} from '../../shared/data-storage.service';
import {GenreService} from '../../private/genres/genre.service';

@Component({
  selector: 'app-genre-filter',
  templateUrl: './genre-filter.component.html',
  styleUrls: ['./genre-filter.component.css']
})
export class GenreFilterComponent implements OnInit {
  genresSubscription: Subscription;
  genres: Genre[];

  constructor(private genresService: GenreService,
              private dataStorageService: DataStorageService) {
  }

  ngOnInit() {
    this.genresSubscription = this.genresService.genresChanged
      .subscribe((genres: Genre[]) => this.genres = genres);
    this.dataStorageService.getGenres();
  }

}
