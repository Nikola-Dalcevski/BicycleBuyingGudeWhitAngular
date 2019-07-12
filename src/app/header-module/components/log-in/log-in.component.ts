import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from '../../../shared-module/shared services/auth-firebase.service';


@Component({
  selector: 'log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  email: string;
  password: string;
  loginError;
  userName;
  showUserMenu;

  constructor(public authService: AuthFirebaseService ) {}

  login(logInForm) {
  this.email = logInForm.value.email;
  this.password =  logInForm.value.pass;
  this.authService.login(this.email, this.password); 
  }

  changeShow(event){
    this.showUserMenu = event;
  }



  ngOnInit() {
    this.authService.userSend.subscribe(x => {  
      if(x){
        console.log(x);
        this.showUserMenu = x.bikeuser ? true : false;
        this.loginError = x.error;
        this.userName = x.bikeuser 
      }     
    })
  }
}
