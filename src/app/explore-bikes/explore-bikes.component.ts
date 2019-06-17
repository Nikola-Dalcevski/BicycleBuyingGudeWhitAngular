import { Component, OnInit, Input, } from '@angular/core';
import { Bike } from '../bike'
import {  GetBikesService } from './get-bikes.service'
import { Http } from '@angular/http';



@Component({
  selector: 'app-explore-bikes',
  templateUrl: './explore-bikes.component.html',
  styleUrls: ['./explore-bikes.component.css'],
 
  
})
export class ExploreBikesComponent implements OnInit {
   bikes: Bike[];
   
   @Input() filter:  any[];
   
   isFinished: string;
   
  constructor(http: Http) {
      
    http.get('https://raw.githubusercontent.com/Nikola-Dalcevski/test-api/master/db.json')
    .subscribe(res => {
      
       let data = res.json().Bikes;
       this.bikes= [];
       for(let bike of data){       
        this.bikes.push(new Bike(bike));
        console.log("call on submit");
        this.isFinished = "yes";
       }
      
  })
    //    this.filter.forEach(type => {
    //     this.bikes.filter(bike => bike.brand === type || bike.type === type || bike.tireSize == type);
    //   })
     
    //  console.log(this.bikes);

   }
  ngOnInit() {
    console.log("explore Init")
    console.log(this.isFinished);
  }

}
