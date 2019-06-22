import { Component, OnInit } from '@angular/core';
// import { TypeOfBikeRoadComponent } from '../type-of-bike-road/type-of-bike-road.component';
// import { TypeOfBikeMountainComponent } from '../type-of-bike-mountain/type-of-bike-mountain.component';
@Component({
  selector: 'app-type-of-bikes',
  templateUrl: './type-of-bikes.component.html',
  styleUrls: ['./type-of-bikes.component.css'],
})

 
export class TypeOfBikesComponent implements OnInit {
   
  imgUrl = "../Images/specialized-venge-pro-20191.jpg";
  constructor() { }

  ngOnInit() {
  }

}
