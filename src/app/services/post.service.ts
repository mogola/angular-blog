import {Subject} from "rxjs";
import {Injectable} from "@angular/core";
import {Blog} from '../models/Blog.model';
import * as firebase from 'firebase';

@Injectable()

export class PostService {
// get posts - angular exercise  
constructor(){
	this.getPosts();
}

currentDate = new Promise(
  	(resolve, reject) =>{
  		const date = new Date();
  		setTimeout(() => {
  			resolve(date);
  		}, 2000);
  	}
  );
	
posts:Blog[] = []
postSubject = new Subject<any[]>();


/*
  private posts = [
  	{
  		id:0,
  		title : "Mon premier post",
  		content : "Maecenas eu leo gravida, volutpat neque eu, fermentum dolor. Quisque ex arcu, tristique et lorem sed, dictum commodo tortor. Sed iaculis erat nec lorem auctor, vitae congue nibh commodo. Quisque porttitor interdum ipsum ac condimentum. Praesent aliquet nibh eu diam dictum lacinia. Nulla eu congue velit, non blandit metus. Donec cursus vestibulum ligula non varius.",
  		loveIts : 0,
  		created_at : this.currentDate
  	},
  	{
  		id:1,
  		title : "Mon deuxiéme post",
  		content : "Maecenas eu leo gravida, volutpat neque eu, fermentum dolor. Quisque ex arcu, tristique et lorem sed, dictum commodo tortor. Sed iaculis erat nec lorem auctor, vitae congue nibh commodo. Quisque porttitor interdum ipsum ac condimentum. Praesent aliquet nibh eu diam dictum lacinia. Nulla eu congue velit, non blandit metus. Donec cursus vestibulum ligula non varius.",
  		loveIts : 0,
  		created_at : this.currentDate
  	},
  	{
  		id:2,
  		title : "Encore un post",
  		content : "Maecenas eu leo gravida, volutpat neque eu, fermentum dolor. Quisque ex arcu, tristique et lorem sed, dictum commodo tortor. Sed iaculis erat nec lorem auctor, vitae congue nibh commodo. Quisque porttitor interdum ipsum ac condimentum. Praesent aliquet nibh eu diam dictum lacinia. Nulla eu congue velit, non blandit metus. Donec cursus vestibulum ligula non varius.",
  		loveIts : 0,
  		created_at : this.currentDate
  	}
  ];
 */
//copie des données
  emitPostsSubject(){
  	this.postSubject.next(this.posts);
  }

  savePosts(){
  	firebase.database().ref('/posts').set(this.posts);
  }

  getPosts(){
  	firebase.database().ref('/posts')
  	.on('value', (data) => {
  		this.posts = data.val() ? data.val() :[];
  		this.emitPostsSubject();
  	}
  	);
  }

  getSinglePost(id:number){
  	return new Promise(
  		(resolve, reject) =>{
  			firebase.database.ref('/posts/' + id).once('value').then(
  				(data) => {
  					resolve(data.val());
  				}, 
  				(error) => {
  					reject(error);
  				}
  			)
  		}	
  	)
  }

  createNewPost(newPost:Blog){
  	this.posts.push(newPost);
  	this.savePosts();
  	this.emitPostsSubject();
  }

  removePost(post:Blog){
  	const postIndexToRemove = this.posts.findIndex(
  		(postEl) => {
  			if(postEl === post){
  				return true;
  			}
  		}
  	);

  	this.posts.splice(postIndexToRemove, 1);
  	this.savePosts();
  	this.emitPostsSubject();
  }
   // permet de récuperer l'objet par l'id
  getPostId(id:number){
  	const post = this.posts.find(
  		(postObject) => {
  			return postObject.id === id;
  		}
  	);

  return post;

  }
  
    addPost(blog:Blog){
		this.posts.push(blog);
		this.emitPostsSubject();
	}

  allLike(){
  	for(let post of this.posts){
  		post.loveIts = 1;
  	}
  	// emettre les éléments
  	this.emitPostsSubject();
  }

  allDislike(){
  	for(let post of this.posts){
  		post.loveIts = -1;
  	}
  	this.emitPostsSubject();
  }

  onActive(index:number){
  	this.posts[index].loveIts = 1;
  	this.emitPostsSubject();
  }

  onDesactive(index:number){
  	this.posts[index].loveIts = -1;
  	this.emitPostsSubject();
  }
}