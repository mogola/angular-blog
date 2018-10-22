import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
	// simulate current date
  currentDate = new Promise(
  	(resolve, reject) =>{
  		const date = new Date();
  		setTimeout(() => {
  			resolve(date);
  		}, 2000);
  	}
  );

   // get posts - angular exercise  
  posts = [
  	{
  		title : "Mon premier post",
  		content : "Maecenas eu leo gravida, volutpat neque eu, fermentum dolor. Quisque ex arcu, tristique et lorem sed, dictum commodo tortor. Sed iaculis erat nec lorem auctor, vitae congue nibh commodo. Quisque porttitor interdum ipsum ac condimentum. Praesent aliquet nibh eu diam dictum lacinia. Nulla eu congue velit, non blandit metus. Donec cursus vestibulum ligula non varius.",
  		loveIts : 0,
  		dontLoveIts : 0,
  		created_at : this.currentDate
  	},
  	{
  		title : "Mon deuxiéme post",
  		content : "Maecenas eu leo gravida, volutpat neque eu, fermentum dolor. Quisque ex arcu, tristique et lorem sed, dictum commodo tortor. Sed iaculis erat nec lorem auctor, vitae congue nibh commodo. Quisque porttitor interdum ipsum ac condimentum. Praesent aliquet nibh eu diam dictum lacinia. Nulla eu congue velit, non blandit metus. Donec cursus vestibulum ligula non varius.",
  		loveIts : 0,
  		dontLoveIts : 0,
  		created_at : this.currentDate
  	},
  	{
  		title : "Encore un post",
  		content : "Maecenas eu leo gravida, volutpat neque eu, fermentum dolor. Quisque ex arcu, tristique et lorem sed, dictum commodo tortor. Sed iaculis erat nec lorem auctor, vitae congue nibh commodo. Quisque porttitor interdum ipsum ac condimentum. Praesent aliquet nibh eu diam dictum lacinia. Nulla eu congue velit, non blandit metus. Donec cursus vestibulum ligula non varius.",
  		loveIts : 0,
  		dontLoveIts : 0,
  		created_at : this.currentDate
  	}
  ];

constructor (){}

}