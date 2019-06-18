import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from '../../auth-firebase.service'
import {  HttpUserBikesService } from "../../http-user-bikes.service"
import { async } from 'q';
@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email: string;
  password: string;
  loginError;
  // userMenu: boolean = false;
  // test: boolean;
  userName;
  showUserMenu;

  constructor(public authService: AuthFirebaseService,private httpBikeService: HttpUserBikesService ) {}



  async onSubmit(logInForm) {
  this.email = logInForm.value.email;
  this.password =  logInForm.value.pass;
  await this.authService.login(this.email, this.password);
  this.loginError = this.authService.logInError;
  
  }





  ngOnInit() {
   

    this.authService.userSend.subscribe(x => {
    
      this.showUserMenu = x ? true : false;
     this.userName = x;
      
    })



  }
}
