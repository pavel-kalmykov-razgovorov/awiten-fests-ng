import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {
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
