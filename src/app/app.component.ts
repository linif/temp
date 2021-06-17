import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'learningForms';

  defaultOption = 'pet'

  onSubmit(form:NgForm){

    console.log(form);
    // if(form.value.username.trim() == "sagnik" && form.value.email == "sagnikaich0@gmail.com"){
    //   console.log("Access Granted");
    // }
    // else{
    //   console.log("You are not allowed");
    // }
  }
}
