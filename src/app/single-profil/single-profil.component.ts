import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-single-profil',
  templateUrl: './single-profil.component.html',
  styleUrls: ['./single-profil.component.css']
})

export class SingleProfilComponent implements OnInit {
	title: string = 'Profil';
	content: string = 'Présent';
  
  constructor(private postService:PostService, 
				private route:ActivatedRoute) { }

  ngOnInit() {
  	const id = this.route.snapshot.params['id'];

  	this.title = this.postService.getPostId(+id).title;
  	this.content = this.postService.getPostId(+id).content;
  }

}
