import { User } from "./../models/user.model";
import {HttpClient} from "@angular/common/http";
import { Subject } from 'rxjs';
import { Injectable} from  '@angular/core';

@Injectable()

export class UserService{
	constructor(private httpClient:HttpClient){}

	private users: User[] = [{
		id : 0,
		firstName : 'James',
		lastName : 'Smith',
		email : 'james@smith.com',
		drinkPreference : 'coca', 
		hobbies :[
			'football',
			'tennis',
			'lire'
		]
	}];
	userSubject = new Subject<User[]>();
	
	emitUsers(){
		this.userSubject.next(this.users.slice());
	}

	getUserId(id:number){
  	const user = this.users.find(
  		(userObject) => {
  			return userObject.id === id;
  		}
  	)

	addUser(user:User){
		this.users.push(user);
		this.emitUsers();
	}


	savePostToServer(){
  	this
  	.httpClient
  	.put('https://http-client-demo-e01fe.firebaseio.com/users.json', this.users)
  	.subscribe(
	  		()=>{
	  			console.log('enregistrement terminé');
	  		},
	  		(error) => {
	  		console.log('erreur de enregistrement' + error);
	  		}
  		);
  	}
  	getPostFromServer(){
  		this.httpClient
  		.get<any[]>('https://http-client-demo-e01fe.firebaseio.com/posts.json')
  		.subscribe(
  		(response) => {
  			this.users = response;
  			this.emitUsers();
  		},
  		(error) => {
  			console.log('error de chargement' + error);
  		})
  	}

}