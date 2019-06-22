import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject, throwError } from 'rxjs';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { defineBase } from '@angular/core/src/render3';
import { Bike } from '../bike';


@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
  private user = new BehaviorSubject<string>(null);
  userSend = this.user.asObservable();


  userDisplayName: string;
  userId: string;
  errorMessage: string;
  logInError: string;
 

  constructor(private firebaseAuth: AngularFireAuth,private  db: AngularFireDatabase) {
    const listRef = db.list('items');
    console.log("koljo")
   }

   signup(email: string, password: string, name: string, confirmPassword) {
     try{
     if(password != confirmPassword){
       throw "your password and confirm password do not match";
       
     }else if(name.length <= 2){
       throw "Your name must be at least 3 characters";
     }else{
      this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
      .then(value => {
        this.errorMessage = "You are seccesfuly registered"
       this.firebaseAuth.user.subscribe(user => user.updateProfile({displayName : name}));
      })
      .then(() => {
        this.firebaseAuth.user.subscribe(user => {
          this.userDisplayName = user.displayName;
         
          this.db.database.ref(user.uid).set({
            bikes: [""],
          });
          
        })
      })
      .catch(err => {
        this.errorMessage = err;
      })    
     }
   
    }
    catch(err){
      this.errorMessage = err; 
      console.log(this.errorMessage);
    }
  }


  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
      console.log(value.user.displayName);
 
       this.user.next(value.user.displayName);
       //for add bike
       this.userId = value.user.uid  
        
        })
      
      .catch(err => {
       
        this.logInError = err.message;
    
        
      });
  }

  addBikeToUser(){
    console.log(this.db.database);
  }


  logout() {
    this.firebaseAuth
      .auth
      .signOut();
  }

}

