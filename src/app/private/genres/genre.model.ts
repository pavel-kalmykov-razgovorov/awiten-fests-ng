import { Artist } from "../../public/artists/artist.model";
import { Festival } from "../../public/festivals/festival.model";

export class Genre {
  public id: number;
  public name: string;
  public artists: Artist[];
  public festivals: Festival[];
}
