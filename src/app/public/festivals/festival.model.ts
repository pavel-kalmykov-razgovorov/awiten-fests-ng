import { Artist } from "../artists/artist.model";
import { Genre } from "../../private/genres/genre.model";
import { Photo } from "../../private/photos/photo.model";
import { Post } from "../../private/posts/post.model";

export interface Festival {
  id: number;
  name: string;
  date: Date;
  province: string;
  location: string;
  logoUrl: string;
  artists: Artist[];
  genres: Genre[];
  photos: Photo[];
  posts: Post[];
}
