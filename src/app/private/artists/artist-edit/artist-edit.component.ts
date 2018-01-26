import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.css']
})
export class ArtistEditComponent implements OnInit {
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
