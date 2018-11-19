import { Component, OnInit } from '@angular/core';
import { AuthService} from './../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
isAuthStatus:boolean; 
  
 constructor(private authService:AuthService, private router: Router) { }

 onSignIn(){
 	this.authService.signIn().then(
  		() => {
  			this.isAuthStatus = this.authService.isAuth;
  			this.router.navigate(['profil']);
  			console.log('vous êtes connecter');

  		})
 }
 onDisconnect(){
  	this.authService.signOut();
  	this.isAuthStatus = this.authService.isAuth;
  	console.log('je suis deconnecté');
  }
  ngOnInit() {
  }

}
