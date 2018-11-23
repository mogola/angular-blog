import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import {Subscription} from "rxjs";
import {Router} from '@angular/router';
import {Blog} from '../models/Blog.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
	 posts:any[];
  postSubscription:Subscription;
  constructor (private postService: PostService, private router:Router){}

  ngOnInit(){
    this.postSubscription = this.postService.postSubject.subscribe(
    (posts:any[]) => {
    	this.posts = posts;
    });
    this.postService.emitPostsSubject();
  }

  onNewPost(){
  	this.router.navigate(['new']);
  }
  onDeletePost(post:Blog){
  	this.postService.removePost(post);
  }
  onViewPost(id:number){
  	this.router.navigate(['posts', 'view', id])
  }
  onAddLike(i:number){
  	this.postService.onAdd(i);
  }
  onRemoveLike(i:number){
    this.postService.onRemove(i);
  }

  ngOnDestroy(){
  	this.postSubscription.unsubscribe();
  }
}
