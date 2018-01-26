import { Subject } from "rxjs/Subject";
import { Injectable } from "@angular/core";

import { Festival } from "./festival.model";

@Injectable()
export class FestivalService {
  festivalsChanged = new Subject<Festival[]>();
  festivalChanged = new Subject<Festival>();
  private festivals: Festival[] = [];
  private festival: Festival = undefined;

  setFestivals(festivals: Festival[]) {
    this.festivals = festivals;
    this.festivalsChanged.next(this.festivals.slice());
  }

  setFestival(festival: Festival) {
    this.festival = festival;
    this.festivalChanged.next(this.festival);
  }

  getFestivals() {
    return this.festivals.slice();
  }

  getFestival(id: number) {
    return this.festival;
  }

  addFestival(festival: Festival) {
    this.festivals.push();
    this.festivalsChanged.next(this.festivals.slice());
  }

  updateFestival(id: number, festival: Festival) {
    this.festivals[id-1] = festival;
    this.festivalsChanged.next(this.festivals.slice());
  }

  deleteFestival(id: number) {
    this.festivals.splice(id-1, 1);
    this.festivalsChanged.next(this.festivals.slice());
  }
}
