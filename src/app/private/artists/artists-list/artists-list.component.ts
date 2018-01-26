import { Component, OnInit } from '@angular/core';
import { Artist } from "../../../public/artists/artist.model";
import { Subscription } from "rxjs";
import { ArtistService } from "../../../public/artists/artist.service";
import { DataStorageService } from "../../../shared/data-storage.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit {
  artists: Artist[];
  id: number;

  subscription: Subscription;

  constructor(
    private artistService: ArtistService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

  onNewArtist() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEditArtist(id: number) {
    this.router.navigate([`${id}/edit`], { relativeTo: this.route });
  }

  ngOnInit() {
    this.subscription = this.artistService.artistsChanged
      .subscribe(
        (artists: Artist[]) => {
          this.artists = artists;
        }
      );
    this.dataStorageService.getArtists();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
