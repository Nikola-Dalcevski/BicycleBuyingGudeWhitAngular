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

  async onSubmit(logInForm) {
  this.email = logInForm.value.email;
  this.password =  logInForm.value.pass;
  await this.authService.login(this.email, this.password); 
  this.loginError = this.authService.logInError; 
  }

  changeShow(event){
    console.log(event);
    this.showUserMenu = false;
  }



  ngOnInit() {
    this.authService.userSend.subscribe(x => {  
      if(x){
        console.log("change");
        this.showUserMenu = x.bikeuser ? true : false;
        console.log(this.showUserMenu);
        x ? this.userName = x.bikeuser : false;
      }     
    })
  }
}
