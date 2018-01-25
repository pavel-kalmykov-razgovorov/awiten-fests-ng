import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from "./post.model";

@Injectable()
export class PostService {
  postsChanged = new Subject<Post[]>();
  private posts: Post[] = [];

  setPosts(posts: Post[]) {
    this.posts = posts;
    this.postsChanged.next(this.posts.slice());
  }

  getPosts() {
    return this.posts.slice();
  }
}
