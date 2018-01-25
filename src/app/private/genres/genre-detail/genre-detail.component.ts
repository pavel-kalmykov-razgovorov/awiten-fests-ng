import { Component, OnInit } from '@angular/core';
import { Genre } from "../genre.model";
import { GenreService } from "../genre.service";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-genre-detail',
  templateUrl: './genre-detail.component.html',
  styleUrls: ['./genre-detail.component.css']
})
export class GenreDetailComponent implements OnInit {
  genre: Genre;
  id: number;

  constructor(
    private genreService: GenreService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.genre = this.genreService.getGenre(this.id)
        }
      );
  }

}
