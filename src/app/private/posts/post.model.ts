import { Festival } from "../../public/festivals/festival.model";

export class Post {
  public id: number;
  public title: string;
  public lead: string;
  public body: string;
  public festival: Festival;
}
