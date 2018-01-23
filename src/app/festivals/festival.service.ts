import { Subject } from "rxjs/Subject";
import { Injectable } from "@angular/core";

import { Festival } from "./festival.model";

@Injectable()
export class FestivalService {
  festivalsChanged = new Subject<Festival[]>();
  private festivals: Festival[] = [];

  setFestivals(festivals: Festival[]) {
    this.festivals = festivals;
    this.festivalsChanged.next(this.festivals.slice());
  }

  getFestivals() {
    return this.festivals.slice();
  }
}
