import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { PhotoService } from "../photo.service";
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: 'app-photo-edit',
  templateUrl: './photo-edit.component.html',
  styleUrls: ['./photo-edit.component.css']
})
export class PhotoEditComponent implements OnInit {
  id: number;
  editMode = false;
  photoForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private photoService: PhotoService,
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
      const values = [this.photoForm.value['name']];
      if (this.editMode) {
        this.dataStorageService.updatePhoto(this.id, values);
        this.router.navigate(['../../'], { relativeTo: this.route });
      }
      else {
        this.dataStorageService.addPhoto(values);
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    }

    private initForm() {
      let photoName = '';

      if(this.editMode) {
        this.dataStorageService.getPhoto(this.id);
        const photo = this.photoService.getPhoto();
        photoName = photo.name;
      }

      this.photoForm = new FormGroup({
        'name': new FormControl(photoName, Validators.required)
      });
    }
}
