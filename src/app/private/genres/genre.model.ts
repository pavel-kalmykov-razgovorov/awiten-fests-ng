import { Artist } from "../../public/artists/artist.model";
import { Festival } from "../../public/festivals/festival.model";

export class Genre {
  public id: number;
  public name: string;
  public artists: Artist[];
  public festivals: Festival[];

  constructor(id: number, location: string, artists: Artist[], festivals: Festival[]) {
    this.id = id;
    this.name = name;
    this.artists = artists;
    this.festivals = festivals;
  }
}
