import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Bike } from '../../shared-module/Models/bike';
import { BehaviorSubject } from 'rxjs';


interface ISendBikes {
  bikes: Bike[],
 
};

@Injectable({
  providedIn: 'root'
})


export class GetBikesService {
  private Bikes = new BehaviorSubject<ISendBikes>(null);
  sendBikes = this.Bikes.asObservable();


  bikesUrl = "https://raw.githubusercontent.com/Nikola-Dalcevski/test-api/master/db.json";
  sendObjectWhitBikes;
  listBikes: Bike[];
  isFinished: boolean;
  constructor(private http: Http) {

    // http.get('https://raw.githubusercontent.com/Nikola-Dalcevski/test-api/master/db.json')
    //   .subscribe(res => {

    //     let data = res.json().Bikes;
    //     this.bikess = [];
    //     for (let bike of data) {


    //       this.bikess.push(new Bike(bike));
    //       console.log("call on submit");

    //     }
    //     console.log(this.bikess);
    //     this.isFinished = true;

    //     this.sendObjectWhitBikes = { bikes: this.bikess, isFinished: this.isFinished };
    //     this.Bikes.next(this.sendObjectWhitBikes);
    //   })

  
  }
  getBikes(){
    
    this.http.get(this.bikesUrl)
      .subscribe(res => {

        let data = res.json().Bikes;
        this.listBikes = [];
        for (let bike of data) {
          this.listBikes.push(new Bike(bike));

        }
        console.log(this.listBikes);
        this.isFinished = true;
        this.sendObjectWhitBikes = { bikes: this.listBikes};
        this.Bikes.next(this.sendObjectWhitBikes);
      })

  }
}
