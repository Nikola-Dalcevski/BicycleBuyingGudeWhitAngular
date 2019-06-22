import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Bike } from '../../bike';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GetBikesService {
  private Bikes = new BehaviorSubject<{bikes:[],isfinished: string}>(null);
  sendBikes = this.Bikes.asObservable();
   sendObjectWhitBikes;
   bikess: Bike[];
   isFinished: boolean;
  constructor(http: Http) { 
  
    http.get('https://raw.githubusercontent.com/Nikola-Dalcevski/test-api/master/db.json')
    .subscribe(res => {
      
      let data = res.json().Bikes;
      this.bikess= [];
      for(let bike of data){ 
      
     
       this.bikess.push(new Bike(bike));
       console.log("call on submit");
       
      }
      console.log(this.bikess);
      this.isFinished= true;
      
      this.sendObjectWhitBikes = {bikes : this.bikess, isFinished : this.isFinished };
      this.Bikes.next(this.sendObjectWhitBikes);
 })
 

}
}
