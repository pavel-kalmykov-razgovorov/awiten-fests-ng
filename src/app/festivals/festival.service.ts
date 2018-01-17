import { Festival } from "./festival.model";

export class FestivalService {
  private festivals: Festival[] = [
    new Festival('A Test Festival','This is a random location')
  ];

  getFestivals() {
    return this.festivals.slice();
  }
}
