import { Component, OnInit, Input, Output,} from '@angular/core';
import { Bike } from 'src/app/bike';
import { EventEmitter } from 'protractor';
import { BikeInfoService } from 'src/app/bike-info.service';

@Component({
  selector: 'show-bikes',
  templateUrl: './show-bikes.component.html',
  styleUrls: ['./show-bikes.component.css']
})
export class ShowBikesComponent implements OnInit {
  @Input() bikeList;
  selectedBike: Bike ;
  bikeInfo: Bike;
  bikeLists;

  constructor(private data: BikeInfoService) {
        
    
   }
   onSelect(bike){
    this.data.changeBikeInfo(bike)
  }

  ngOnInit() {
    
   console.log("init is called")
  }
  ngOnDestroy(){
    this.data.currentBikeInfo.subscribe(bikeInfo => this.bikeInfo = bikeInfo);
    
    // console.log(this.selectedBike);
    console.log("init called showBikes");
    
    this.bikeLists = this.bikeList;
  }

}
