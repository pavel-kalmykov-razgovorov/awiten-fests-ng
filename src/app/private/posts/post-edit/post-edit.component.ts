import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
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
