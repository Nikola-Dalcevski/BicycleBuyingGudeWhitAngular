import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';
import { FirebaseAuth } from 'angularfire2';
import { AuthFirebaseService } from './auth-firebase.service';
import { userInfo } from 'os';
import { BehaviorSubject, Observable, observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HttpUserBikesService {
  bikeslis;
  sizelis;
  bikesList = [];
  private bikes = new BehaviorSubject<Object>(null);
  bikesSend = this.bikes.asObservable();
  constructor(private http: Http, private user : AuthFirebaseService) {

   }


   
   FetchUsersBikes( ) : Observable<any>{
    this.http.get("https://frontend-project-with-firebase.firebaseio.com/.json")
    .subscribe(res => {
     let data = res.json();  
     let userId = this.user.userId;
      this.bikeslis = data[`${userId}`].bikes;  
      this.sizelis = data[`${userId}`].sizes.size[0];
      this.bikesList = [];
      for(let bike of Object.values(this.bikeslis)){
       
         this.bikesList.push(bike);
      }
     
      
     
     
     this.bikes.next({
        bikes: this.bikesList,
        sizes: this.sizelis,
      })


      
    })
    console.log(this.bikes)
    return this.bikesSend;

   }
}
