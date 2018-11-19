import { Component, Input, OnInit } from '@angular/core';
import { PostService } from './../services/post.service';
import {Blog} from '../models/Blog.model';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-single-blog',
  templateUrl: './single-blog.component.html',
  styleUrls: ['./single-blog.component.css']
})
export class SingleBlogComponent implements OnInit {

post:Blog;
date = new Date();

  constructor(private postService:PostService, 
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
  }

  onBack(){
    this.router.navigate(['']);
  }

}
