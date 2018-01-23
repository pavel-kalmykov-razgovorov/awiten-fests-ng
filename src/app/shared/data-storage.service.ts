import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import { FestivalService } from "../festivals/festival.service";
import { Festival } from "../festivals/festival.model";

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private festivalService: FestivalService) {}

  getFestivals() {
    this.http.get('http://localhost:8000/api/festivals')
      .subscribe(
        (response: Response) => {
          const festivals: Festival[] = response.json().data;
          this.festivalService.setFestivals(festivals);
        }
      );
  }
}
