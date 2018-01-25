import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from "./post.model";
import { Subscription } from "rxjs/Subscription";
import { PostService } from "./post.service";
import { DataStorageService } from "../../shared/data-storage.service";

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit, OnDestroy {
  posts: Post[];
  subscription: Subscription;

  constructor(
    private postService: PostService,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.subscription = this.postService.postsChanged
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
    this.dataStorageService.getPosts();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
