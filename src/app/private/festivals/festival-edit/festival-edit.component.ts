import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { FestivalService } from "../../../public/festivals/festival.service";
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: 'app-festival-edit',
  templateUrl: './festival-edit.component.html',
  styleUrls: ['./festival-edit.component.css']
})
export class FestivalEditComponent implements OnInit {
  id: number;
  editMode = false;
  festivalForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private festivalService: FestivalService,
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
      const values = [this.festivalForm.value['name'], this.festivalForm.value['location'],
        this.festivalForm.value['province'], this.festivalForm.value['date'],
        this.festivalForm.value['logoUrl']];
      if (this.editMode) {
        this.dataStorageService.updateFestival(this.id, values);
        this.router.navigate(['../../'], { relativeTo: this.route });
      }
      else {
        this.dataStorageService.addFestival(values);
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    }

    private initForm() {
      let festivalName = '';
      let festivalLocation = '';
      let festivalProvince = '';
      let festivalDate: Date;
      let festivalLogos = '';

      if(this.editMode) {
        this.dataStorageService.getFestival(this.id);
        const festival = this.festivalService.getFestival(this.id);
        festivalName = festival.name;
        festivalLocation = festival.location;
        festivalProvince = festival.province;
        festivalDate = festival.date;
        festivalLogos = festival.logoUrl;
      }

      this.festivalForm = new FormGroup({
        'name': new FormControl(festivalName, Validators.required),
        'location': new FormControl(festivalLocation, Validators.required),
        'province': new FormControl(festivalProvince, Validators.required),
        'date': new FormControl(festivalDate, Validators.required),
        'logoUrl': new FormControl(festivalLogos, Validators.required)
      });
    }
}
