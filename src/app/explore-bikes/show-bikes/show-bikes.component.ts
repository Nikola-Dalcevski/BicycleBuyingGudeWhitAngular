import { Component, OnInit, Input, Output,} from '@angular/core';
import { Bike } from 'src/app/bike';
import { BikeInfoService } from 'src/app/bike-info.service';

@Component({
  selector: 'show-bikes',
  templateUrl: './show-bikes.component.html',
  styleUrls: ['./show-bikes.component.css']
})
export class ShowBikesComponent implements OnInit {
  @Input() bikeList;
  bikeInfo: Bike;
  bikeLists;

  constructor(private data: BikeInfoService) {}


   onSelect(bike){
    this.data.changeBikeInfo(bike)
  }


  ngOnInit() {
    
  }

}
