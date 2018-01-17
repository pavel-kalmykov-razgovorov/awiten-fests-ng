import { Artist } from "./artist.model";

export class ArtistService {
  private artists: Artist[] = [
    new Artist('A Test Artist','www.test.com')
  ];

  getArtists() {
    return this.artists.slice();
  }
}
