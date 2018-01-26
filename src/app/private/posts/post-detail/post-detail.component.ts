import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Post } from "../post.model";
import { Subscription } from "rxjs";
import { PostService } from "../post.service";
import { ActivatedRoute, Params, Router } from "@angular/router";
import { DataStorageService } from "../../../shared/data-storage.service";

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.css']
})
export class PostDetailComponent implements OnInit, OnDestroy {
  @Input() post: Post;
  @Input() id: number;

  subscription: Subscription;

  constructor(
    private postService: PostService,
    private router: Router,
    private route: ActivatedRoute,
    private dataStorageService: DataStorageService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.subscription = this.postService.postChanged
            .subscribe(
              (post: Post) => {
                this.post = post;
              }
            );
          this.dataStorageService.getPost(this.id);
        }
      );
  }

  onEditPost(id: number) {
    this.router.navigate(['../', this.id, 'edit'], { relativeTo: this.route });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
