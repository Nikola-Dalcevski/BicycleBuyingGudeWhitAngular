import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Bike } from '../bike';
import { BikeFeaturesBrakeSuspenHandelbarComponent } from '../bike-features/bike-features-brake-suspen-handelbar/bike-features-brake-suspen-handelbar.component';

@Injectable({
  providedIn: 'root'
})
export class GetBikesService {
   bikes: Bike[];
  constructor(http: Http) { 
    http.get('https://raw.githubusercontent.com/Nikola-Dalcevski/test-api/master/db.json')
    .subscribe(res => {
     
       let data = res.json().Bikes;
       this.bikes= [];
       
       for(let bike of data){       
        this.bikes.push(new Bike(bike));
       }
  })
}
}
