import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormsModule, Validators} from '@angular/forms';
import {Blog} from '../models/Blog.model';
import {PostService} from '../services/post.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private formBuilder:FormBuilder, private postService:PostService, private router:Router) { }

  postForm:FormGroup;

  ngOnInit() {
  	this.initForm();
  }
	initForm(){
		this.postForm = this.formBuilder.group({
			title : ['', Validators.required], 
			content : ['', Validators.required]
		})
	}

	onSubmitForm(){
		const title = this.postForm.get('title').value;
		const content = this.postForm.get('content').value;
		const newPost = new Blog(title, content);
		this.postService.createNewPost(newPost);
		this.router.navigate(['']);
	}
}
