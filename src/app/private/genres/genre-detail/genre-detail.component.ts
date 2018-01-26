import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Genre } from '../genre.model';
import { GenreService } from '../genre.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
  selector: 'app-genre-detail',
  templateUrl: './genre-detail.component.html',
  styleUrls: ['./genre-detail.component.css']
})
export class GenreDetailComponent implements OnInit, OnDestroy {
  @Input() genre: Genre;
  @Input() id: number;

  subscription: Subscription;

  constructor(
    private genreService: GenreService,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.subscription = this.genreService.genreChanged
            .subscribe(
              (genre: Genre) => {
                this.genre = genre;
              }
            );
          this.dataStorageService.getGenre(this.id);
        }
      );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
