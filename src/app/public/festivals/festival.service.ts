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

  getFestival() {
    return this.festival;
  }
}
