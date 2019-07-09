import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PostsService } from '../services/posts.service';
import { Router } from '@angular/router';
import { Post } from '../models/Post.model';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

	postForm: FormGroup;

	constructor(private formBuilder: FormBuilder,
				private router: Router,
				private postsService: PostsService) { }

	ngOnInit() {
		this.initForm();
	}

	initForm() {
	    this.postForm = this.formBuilder.group({
	      title: ['', Validators.required],
	      content: ['', Validators.required]
	    });
	}

	onSubmit() {
		const formValue = this.postForm.value;
  		const newPost = new Post(
  			formValue['title'],
  			formValue['content'],
  			formValue['created_at'],
  			formValue['loveIts']);	
  		this.postsService.addPost(newPost);
  		this.router.navigate(['/posts']);
	}

}
