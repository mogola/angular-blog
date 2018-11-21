import { Component, OnInit, OnDestroy } from '@angular/core';
import { PostService } from '../services/post.service';
import {Subscription} from "rxjs";
import {Router} from '@angular/router';
import {Blog} from '../models/Blog.model';

@Component({
  selector: 'app-profil-view',
  templateUrl: './profil-view.component.html',
  styleUrls: ['./profil-view.component.css']
})

export class ProfilViewComponent implements OnInit, OnDestroy {
	// simulate current date
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
  	this.postService.onActive(i);
  }
  likeAll(){
    this.postService.allLike();
  }

  dislikeAll(){
    this.postService.allDislike();
  }

  ngOnDestroy(){
  	this.postSubscription.unsubscribe();
  }

}
