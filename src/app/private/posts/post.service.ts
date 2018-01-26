import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Post } from "./post.model";

@Injectable()
export class PostService {
  postsChanged = new Subject<Post[]>();
  postChanged = new Subject<Post>();
  private posts: Post[] = [];
  private post: Post = undefined;

  setPosts(posts: Post[]) {
    this.posts = posts;
    this.postsChanged.next(this.posts.slice());
  }

  setPost(post: Post) {
    this.post = post;
    this.postChanged.next(this.post);
  }

  getPosts() {
    return this.posts.slice();
  }

  getPost() {
    return this.post;
  }

  addPost(Post: Post) {
    this.posts.push();
    this.postsChanged.next(this.posts.slice());
  }

  updatePost(id: number, post: Post) {
    this.posts[id-1] = post;
    this.postsChanged.next(this.posts.slice());
  }

  deletePost(id: number) {
    this.posts.splice(id-1, 1);
    this.postsChanged.next(this.posts.slice());
  }
}
