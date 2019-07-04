import { Component, OnInit } from '@angular/core';
import {  AuthFirebaseService } from '../../../shared-module/shared services/auth-firebase.service';
import {Router} from "@angular/router";
import { AngularFireDatabase } from 'angularfire2/database';
@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css'],
  // providers: [AuthFirebaseService]
})




export class RegisterUserComponent implements OnInit {
   email: string;
   password: string;
   name: string;
   userId;
   errorMessage: string;
   confirmPassword: string;

  constructor(private authService: AuthFirebaseService,
     private db: AngularFireDatabase,
     private router: Router) { }
  
    async onSubmit(event,eve){
    eve.preventDefault();

    console.log(event.value);
    this.name = event.value.name;
    this.email = event.value.email;
    this.password = event.value.regPassword;
    this.confirmPassword

    await this.authService.signup(event.value.email,event.value.regPassword, event.value.name, event.value.confirm)
   
    console.log(this.errorMessage);
    this.errorMessage = this.authService.errorMessage;
    if(!this.errorMessage){
      this.errorMessage ="You are seccesfuly registered";
       setTimeout(() => {
         
       }, 2000);
    }
    console.log(this.errorMessage);

    
   

    
  }




  ngOnInit() {
    this.errorMessage = "";
    this.authService.userSend.subscribe(x => {
      console.log(x);
      this.errorMessage = x.error
      console.log(this.errorMessage);   
     });
  
  }


}