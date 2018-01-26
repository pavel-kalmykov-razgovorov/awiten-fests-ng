import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.css']
})
export class GenreEditComponent implements OnInit {
  id: number;
  editMode = false;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] !=  null;
        }
      );
  }
}
