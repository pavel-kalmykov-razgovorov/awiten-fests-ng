import { Festival } from "../../public/festivals/festival.model";

export class Photo {
  public id: number;
  public name: string;
  public url: string;
  public festival: Festival;
}
