import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { httpFactory } from '@angular/http/src/http_module';

@Injectable({
  providedIn: 'root'
})
export class HttpUserBikesService {
  test;
  constructor(private http: Http) {

   }

   FetchUsersBikes(){
    this.http.get("https://frontend-project-with-firebase.firebaseio.com/.json")
    .subscribe(res => {
      console.log(typeof res.json());
      console.log(res.json());
      this.test = res.json();
    })
   }
}
