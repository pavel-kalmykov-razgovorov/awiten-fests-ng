import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Genre } from '../genre.model';
import { GenreService } from '../genre.service';
import { DataStorageService } from '../../../shared/data-storage.service';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-genre-list',
  templateUrl: './genre-list.component.html',
  styleUrls: ['./genre-list.component.css']
})
export class GenreListComponent implements OnInit, OnDestroy {
  genres: Genre[];
  id: number;

  subscription: Subscription;

  constructor(private genreService: GenreService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) {

  }

  onNewGenre() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEditGenre(id: number) {
    this.router.navigate([`${id}/edit`], { relativeTo: this.route });
  }

  onDeleteGenre(id: number) {
    this.dataStorageService.deleteGenre(id);
    this.router.navigate(['/admin/genres'], { relativeTo: this.route });
  }

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
