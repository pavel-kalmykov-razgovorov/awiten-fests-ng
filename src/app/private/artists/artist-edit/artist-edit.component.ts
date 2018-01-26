import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from "@angular/router";
import { ArtistService } from "../../../public/artists/artist.service";
import { DataStorageService } from "../../../shared/data-storage.service";
import { FormGroup, Validators, FormControl } from "@angular/forms";

@Component({
  selector: 'app-artist-edit',
  templateUrl: './artist-edit.component.html',
  styleUrls: ['./artist-edit.component.css']
})
export class ArtistEditComponent implements OnInit {
  id: number;
  editMode = false;
  artistForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private artistService: ArtistService,
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
      const values = [this.artistForm.value['name'], this.artistForm.value['country'],
        this.artistForm.value['soundcloud'], this.artistForm.value['website'],
        this.artistForm.value['profileUrl'], this.artistForm.value['headerUrl']];
      if (this.editMode) {
        this.dataStorageService.updateArtist(this.id, values);
        this.router.navigate(['../../'], { relativeTo: this.route });
      }
      else {
        this.dataStorageService.addArtist(values);
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    }

    private initForm() {
      let festivalName = '';
      let festivalCountry = '';
      let festivalSoundcloud = '';
      let festivalWebsite = '';
      let festivalProfileUrl = '';
      let festivalHeaderUrl = '';

      if(this.editMode) {
        this.dataStorageService.getArtist(this.id);
        const festival = this.artistService.getArtist();
        festivalName = festival.name;
        festivalCountry = festival.country;
        festivalSoundcloud = festival.soundcloud;
        festivalWebsite = festival.website;
        festivalProfileUrl = festival.profileUrl;
        festivalHeaderUrl = festival.headerUrl
      }

      this.artistForm = new FormGroup({
        'name': new FormControl(festivalName, Validators.required),
        'country': new FormControl(festivalCountry, Validators.required),
        'soundcloud': new FormControl(festivalSoundcloud, Validators.required),
        'website': new FormControl(festivalWebsite, Validators.required),
        'profileUrl': new FormControl(festivalProfileUrl, Validators.required),
        'headerUrl': new FormControl(festivalHeaderUrl, Validators.required)
      });
    }
}
