import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.css']
})
export class EditProfilComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form:NgForm){
  	console.log(form.value);
  }
}
