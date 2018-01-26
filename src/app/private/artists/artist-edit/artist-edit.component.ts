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
      let artistName = '';
      let artistCountry = '';
      let artistSoundcloud = '';
      let artistWebsite = '';
      let artistProfileUrl = '';
      let artistHeaderUrl = '';

      if(this.editMode) {
        this.dataStorageService.getArtist(this.id);
        const artist = this.artistService.getArtist();
        artistName = artist.name;
        artistCountry = artist.country;
        artistSoundcloud = artist.soundcloud;
        artistWebsite = artist.website;
        artistProfileUrl = artist.profileUrl;
        artistHeaderUrl = artist.headerUrl
      }

      this.artistForm = new FormGroup({
        'name': new FormControl(artistName, Validators.required),
        'country': new FormControl(artistCountry, Validators.required),
        'soundcloud': new FormControl(artistSoundcloud, Validators.required),
        'website': new FormControl(artistWebsite, Validators.required),
        'profileUrl': new FormControl(artistProfileUrl, Validators.required),
        'headerUrl': new FormControl(artistHeaderUrl, Validators.required)
      });
    }
}
