import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { Http } from '@angular/http';
import { AngularFireDatabase } from 'angularfire2/database';
import { defineBase } from '@angular/core/src/render3';


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
 

  constructor(private firebaseAuth: AngularFireAuth, private db: AngularFireDatabase) { }

   signup(email: string, password: string, name: string) {
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
        this.logInError = err;
    
        
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


