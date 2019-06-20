import { Component, OnInit, Input, Output,} from '@angular/core';
import { Bike } from 'src/app/bike';
import { BikeInfoService } from '../bike-info/bike-info.service';

@Component({
  selector: 'show-bikes',
  templateUrl: './show-bikes.component.html',
  styleUrls: ['./show-bikes.component.css']
})
export class ShowBikesComponent implements OnInit {
 @Input() bikeList;
  bikeInfo: Bike;
  bikeLists;

  constructor(private data: BikeInfoService) {this.onSelect(null)}


   onSelect(bike){
    this.data.changeBikeInfo(bike)
  }


  ngOnInit() {
    console.log("showBikes")
    this.onSelect(null);
  }

}
