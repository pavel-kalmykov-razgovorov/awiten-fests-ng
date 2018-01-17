import { Component, OnInit } from '@angular/core';
import { Artist } from "./artist.model";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
  artists: Artist[] = [
    new Artist('A Test Artist','www.test.com')
  ];
  constructor() { }

  ngOnInit() {
  }

}
