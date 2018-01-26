import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from "@angular/router";
import { PostService } from "../post.service";
import { DataStorageService } from "../../../shared/data-storage.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: 'app-post-edit',
  templateUrl: './post-edit.component.html',
  styleUrls: ['./post-edit.component.css']
})
export class PostEditComponent implements OnInit {
  id: number;
  editMode = false;
  postForm: FormGroup;

  constructor(private route: ActivatedRoute,
    private postService: PostService,
    private router: Router,
    private dataStorageService: DataStorageService) { }

    ngOnInit() {
      this.route.params
        .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.editMode = params['id'] !=  null;
            this.initForm();
          }
        );
    }

    onSubmit() {
      const values = [this.postForm.value['title'], this.postForm.value['lead'],
        this.postForm.value['body']];
      if (this.editMode) {
        this.dataStorageService.updatePost(this.id, values);
        this.router.navigate(['../../'], { relativeTo: this.route });
      }
      else {
        this.dataStorageService.addPost(values);
        this.router.navigate(['../'], { relativeTo: this.route });
      }
    }

    private initForm() {
      let postTitle = '';
      let postLead = '';
      let postBody = '';


      if(this.editMode) {
        this.dataStorageService.getPost(this.id);
        const post = this.postService.getPost();
        postTitle = post.title;
        postLead = post.lead;
        postBody = post.body;
      }

      this.postForm = new FormGroup({
        'title': new FormControl(postTitle, Validators.required),
        'lead': new FormControl(postLead, Validators.required),
        'body': new FormControl(postBody, Validators.required)
      });
    }
}
