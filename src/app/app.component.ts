import { Component, OnInit } from '@angular/core';
import {Observable,of, from } from 'rxjs';
import { interval } from 'rxjs';
import 'rxjs';
import {Subscription} from 'rxjs';
import * as firebase from 'firebase';
import {AuthService} from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

counterSubscription:Subscription;
constructor(private authService: AuthService){}
  isAuth: boolean;
  ngOnInit(){
    // Initialize Firebase
    var config = {
      apiKey: "AIzaSyDA8vqu8KOn5dg4gcJgHOhmbUTsuhmM9vs",
      authDomain: "blog-fc3d3.firebaseapp.com",
      databaseURL: "https://blog-fc3d3.firebaseio.com",
      projectId: "blog-fc3d3",
      storageBucket: "",
      messagingSenderId: "697630360488"
    };

    firebase.initializeApp(config);
    
    firebase.auth().onAuthStateChanged(
      (user) => {
        if(user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    );
    
  }

  onSignOut() {
    this.authService.signOutUser();
  }
}
