import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { GenreService } from "../genre.service";
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: 'app-genre-edit',
  templateUrl: './genre-edit.component.html',
  styleUrls: ['./genre-edit.component.css']
})
export class GenreEditComponent implements OnInit {
  id: number;
  editMode = false;
  genreForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private genreService: GenreService,
    private router: Router,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] !=  null;
          this.initForm();
        }
      );
  }

  onSubmit() {
    if (this.editMode) {
      this.dataStorageService.updateGenre(this.id, this.genreForm.value['name']);
      this.router.navigate(['../../'], { relativeTo: this.route });
    }
    else {
      this.dataStorageService.addGenre(this.genreForm.value['name']);
      this.router.navigate(['../'], { relativeTo: this.route });
    }
  }

  private initForm() {
    let genreName = '';

    if(this.editMode) {
      this.dataStorageService.getGenre(this.id);
      const genre = this.genreService.getGenre(this.id);
      genreName = genre.name;
    }

    this.genreForm = new FormGroup({
      'name': new FormControl(genreName, Validators.required)
    });
  }
}
