import { Component, OnInit, Input,} from '@angular/core';
import { Bike } from 'src/app/bike';
import { BikeInfoService } from '../bike-info/bike-info.service';
import { PagerService } from '../../pager.service'


@Component({
  selector: 'show-bikes',
  templateUrl: './show-bikes.component.html',
  styleUrls: ['./show-bikes.component.css']
})
export class ShowBikesComponent implements OnInit {
  @Input() bikeList;
  bikeInfo: Bike;
  bikes;
  pagedItems;

  constructor(private data: BikeInfoService, private pagerServic: PagerService) { console.log("test")};
    pager: any = {};
    

   onSelect(bike){
    this.data.changeBikeInfo(bike)
  }

   setPage(page: number){
    this.pager = this.pagerServic.getPager(this.bikeList.length, page);
    this.pagedItems = this.bikeList.slice(this.pager.startIndex, this.pager.endIndex + 1);
   }

  ngOnInit() {
    

    this.setPage(1);
    console.log("showBikesCalled");
     this.onSelect(null);
  }

}
