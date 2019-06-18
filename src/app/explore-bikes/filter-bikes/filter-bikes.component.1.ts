import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bike } from 'src/app/bike';

// import { showBikesComponent } from "../show-bikes/show-bikes.component"

 @Component({
  selector: 'filter-bikes',
  templateUrl: './filter-bikes.component.html',
  styleUrls: [
    './filter-bikes.component.css',
    "../../../../node_modules/font-awesome/css/font-awesome.css"
  ],

})
export class FilterBikesComponent implements OnInit {
  filters: string[];
  @Input()BikesList ;
  @Output() sendValue:EventEmitter<string> = new EventEmitter();
  isFinished: string;
  filteredBikes;
  usedfilter: boolean;
   selBike;
  constructor() { 

  }

  onSubmit(f,s){
    // console.log(this.filteredBikesList);
    this.usedfilter = true;
    console.log(this.BikesList);
    
    this.filters = [];
    console.log(this.BikesList);
    console.log(typeof f.target.elements);
    for(let element of f.target.elements ){
      if(element.checked) this.filters.push(element.value)
    }
    this.filterBikes();
    console.log("call");
    this.isFinished = "show";
    this.sendValue.emit(this.isFinished);
    this.ngOnInit();
    //console.log(this.filters);
  }


  filterBikes(){

   
    this.filters.forEach(type => {
     
      console.log(typeof type);
     this.selBike = this.BikesList.filter(bike => bike.type === type || bike.brand === type || bike.tireSize.toString() === type);
     console.log(this.selBike);
 
    })

 

  };



  ngOnInit() {
   
   console.log("filterinit");
  //  console.log(this.usedfilter);
   if(this.usedfilter){
     this.filteredBikes = this.selBike;
    console.log(this.filteredBikes)
    }
    else{
      console.log(this.BikesList);
    this.filteredBikes = this.BikesList;
     console.log(this.filteredBikes);
    }
  }

}
