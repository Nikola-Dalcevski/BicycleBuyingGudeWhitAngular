import { Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';
import { Bike } from '../../../bike';
import { BikeInfoService } from '../../services/bike-info.service';
import { PagerService } from '../../services/pager.service';


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


  ngOnChanges(changes: SimpleChange){
         let change = changes["bikeList"].currentValue;
         console.log(change);
          this.setPage(1);
  }



  ngOnInit() {
     console.log("show")
    this.setPage(1);
     this.onSelect(null);
  }

}
