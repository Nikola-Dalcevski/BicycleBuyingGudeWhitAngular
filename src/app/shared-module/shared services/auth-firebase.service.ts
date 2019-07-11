import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { BehaviorSubject, throwError, observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';





interface ISendUser {
  bikeuser: string,
  error: string;
};

@Injectable({
  providedIn: 'root'
})
export class AuthFirebaseService {
  user = new BehaviorSubject<ISendUser>(null);
  userSend = this.user.asObservable();
  isRegistered: boolean;
  error = new BehaviorSubject<string>(null);
  errrorSend = this.error.asObservable();


  userDisplayName: string;
  userId: string;
  errorMessage: string;
  logInError: string;


  constructor(private firebaseAuth: AngularFireAuth, private db: AngularFireDatabase) {}




  signup(email: string, password: string, name: string, confirmPassword) {
     
    try {
      if (password != confirmPassword) {
        throw "your password and confirm password do not match";
      } else if (name.length <= 2) {
        throw "Your name must be at least 3 characters";
      } else {

        this.firebaseAuth
          .auth
          .createUserWithEmailAndPassword(email, password)
          .then(() => {
        
            // if (this.firebaseAuth.user) {
              this.login(email,password);
              this.firebaseAuth.user.subscribe(user => user.updateProfile({ displayName: name }));
             
            // }           
          })
          .then(() => {
            // if (this.firebaseAuth.user) {
              this.firebaseAuth.user.subscribe(user => {
                this.db.database.ref(user.uid).set({
                  bikes: [""],
                  sizes: { size: "" },
                });
              })

              
            // }
            this.isRegistered = true;
            //this throw is important so can redirect from register component
            throw "Register";
          })
          .catch(err => {
            this.errorMessage = err.message;
            console.log(this.errorMessage);
            this.error.next(this.errorMessage);
            this.isRegistered = false;
          })
      }
    }
    catch(err){
    this.errorMessage = err;
    console.log(this.errorMessage);
    this.error.next(this.errorMessage);
    this.isRegistered = false;
    }
    


   
    
    
  };


  login(email: string, password: string) {
    this.firebaseAuth
      .auth
      .signInWithEmailAndPassword(email, password)
      .then(value => {
        this.user.next({bikeuser : value.user.displayName, error : null});
        this.userId = value.user.uid
      })
      .catch(err => {
        // this.logInError = err.message;
        this.user.next({bikeuser : null, error : err.message});
      });
  }



  logout() {
    this.firebaseAuth
      .auth
      .signOut();
    this.userDisplayName = "";
    this.userId = ""
  }

}


