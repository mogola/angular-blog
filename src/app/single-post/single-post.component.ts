import { Component, Input, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import { FormGroup, FormBuilder, FormsModule, Validators} from '@angular/forms';
import {Blog} from '../models/Blog.model';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {
	@Input() title:string;
	@Input() content:string;
postFormEdit:FormGroup;
post:Blog;
date = new Date();

  constructor(private formBuilder:FormBuilder,
  			private postService:PostService, 
			private route:ActivatedRoute, 
			private router:Router) { }

  ngOnInit() {
    this.post = new Blog('', '');
    const id = this.route.snapshot.params['id'];
    this.postService.getSinglePost(+id).then(
      (post:Blog) => {
        this.post = post;
      }
     );

    //edit Form 
    this.initFormEdit();
  }

  onBack(){
    this.router.navigate(['posts']);
  }

  // edit post 
  initFormEdit(){
		this.postFormEdit = this.formBuilder.group({
			title : ['', Validators.required], 
			content : ['', Validators.required]
		})
	}

	onSubmitFormEdit(){
		console.log('je suis la ');
		const title = this.postFormEdit.get('title').value;
		console.log('title', title);
		const content = this.postFormEdit.get('content').value;
		console.log('content', content);
		const id = this.route.snapshot.params['id'];

		this.postService.updatePost(id, title, content);
	}
}
