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
   isFinished: boolean;
   
  constructor( private getBikes: GetBikesService) {}



  ngOnInit() {
    
    this.getBikes.sendBikes.subscribe(bikes => {
      if(bikes){     
      this.bikes = bikes.bikes;
      this.isFinished = true;
      }

    });
     
  }
}
