import { Component, OnInit } from '@angular/core';
import { AuthFirebaseService } from '../../../shared-module/shared services/auth-firebase.service';
import { Router } from "@angular/router";
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
    private router: Router) { }

  onSubmit(event, eve) {
    eve.preventDefault();

    this.name = event.value.name;
    this.email = event.value.email;
    this.password = event.value.regPassword;
    this.confirmPassword

    this.authService.signup(event.value.email, event.value.regPassword, event.value.name, event.value.confirm)

  }






  ngOnInit() {

    this.authService.errrorSend.subscribe(x => {
      if (x) {
        this.errorMessage = x
      } 
      if(this.authService.isRegistered){
       
          this.router.navigate(['/']);     
      }   
    });
  }
}