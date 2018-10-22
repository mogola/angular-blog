import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

@Input() title:string; 
@Input() content:string; 
@Input() lovecountup:number;
@Input() lovecountdown:number;
@Input() currentDate:Date;
@Input() likeit:string = "Love it";
@Input() dontlikeit:string = "Don't love it !" ;

  constructor() { }

  ngOnInit() {
  }
  // add like
  onAddLike(){
  	this.lovecountup += 1;
  }
  // add dislike
  onAddDislike(){
  	this.lovecountup -= 1;
  }

}
