import { Component, OnInit} from '@angular/core';
import { Post } from "../post.model";
import { Subscription } from "rxjs";
import { PostService } from "../post.service";
import { DataStorageService } from "../../../shared/data-storage.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Post[];
  id: number;

  subscription: Subscription;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

  onNewPost() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEditPost(id: number) {
    this.router.navigate([`${id}/edit`], { relativeTo: this.route });
  }

  onDeletePost(id: number) {
    this.dataStorageService.deletePost(id);
    this.router.navigate(['/admin/posts'], { relativeTo: this.route });
  }

  ngOnInit() {
    this.subscription = this.postService.postsChanged
      .subscribe(
        (posts: Post[]) => {
          this.posts = posts;
        }
      );
    this.dataStorageService.getPosts();
  }
}
