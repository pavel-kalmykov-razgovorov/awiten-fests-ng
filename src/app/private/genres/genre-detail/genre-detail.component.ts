import { Component, OnInit} from '@angular/core';
import { Genre } from '../genre.model';
import { GenreService } from '../genre.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../../../shared/data-storage.service';

@Component({
  selector: 'app-genre-detail',
  templateUrl: './genre-detail.component.html',
  styleUrls: ['./genre-detail.component.css']
})
export class GenreDetailComponent implements OnInit {
  genre: Genre;
  id: number;

  subscription: Subscription;

  constructor(
    private genreService: GenreService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

  onEditGenre(id: number) {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

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
}
