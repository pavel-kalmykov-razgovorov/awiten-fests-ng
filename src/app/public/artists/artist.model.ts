import { Festival } from "../festivals/festival.model";
import { Genre } from "../../private/genres/genre.model";

export interface Artist {
  id: number;
  name: string;
  country: string;
  soundcloud: string;
  website: string;
  profileUrl: string;
  headerUrl: string;
  festivals: Festival[];
  genres: Genre[];
}
