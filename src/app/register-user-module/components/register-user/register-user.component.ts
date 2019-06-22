import { Component, OnInit } from '@angular/core';
import {  AuthFirebaseService } from '../../../shared services/auth-firebase.service'
import { TestBed } from '@angular/core/testing';
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

  constructor(private authService: AuthFirebaseService, private db: AngularFireDatabase) { }
  
  async onSubmit(event,eve){
    eve.preventDefault();

    console.log(event.value);
    this.name = event.value.name;
    this.email = event.value.email;
    this.password = event.value.regPassword;
    this.confirmPassword

    await this.authService.signup(event.value.email,event.value.regPassword, event.value.name, event.value.confirm)
   
    this.errorMessage = this.authService.errorMessage
 
    
  }


  ngOnInit() {
   
  }


}