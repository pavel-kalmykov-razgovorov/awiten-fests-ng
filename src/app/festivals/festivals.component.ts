import { Component, OnInit } from '@angular/core';

import { Festival } from "./festival.model";
import { FestivalService } from "./festival.service";

@Component({
  selector: 'app-festivals',
  templateUrl: './festivals.component.html',
  styleUrls: ['./festivals.component.css'],
  providers: [FestivalService]
})
export class FestivalsComponent implements OnInit {
  festivals: Festival[];
  constructor(private festivalService: FestivalService) { }

  ngOnInit() {
    this.festivals = this.festivalService.getFestivals();
  }

}
