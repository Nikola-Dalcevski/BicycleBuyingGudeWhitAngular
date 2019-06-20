import { Component, OnInit, Input, Output,} from '@angular/core';
import { Bike } from 'src/app/bike';
import { BikeInfoService } from '../bike-info/bike-info.service';
import { PagerService } from '../../pager.service'
import { fromEventPattern } from 'rxjs';

@Component({
  selector: 'show-bikes',
  templateUrl: './show-bikes.component.html',
  styleUrls: ['./show-bikes.component.css']
})
export class ShowBikesComponent implements OnInit {
 @Input() bikeList;
  bikeInfo: Bike;
  bikeLists;

  constructor(private data: BikeInfoService, private pagerServic: PagerService) {}
    pager: any = {};
    pagetItems;

   onSelect(bike){
    this.data.changeBikeInfo(bike)
  }

  setPage(page: number){
    this.pager = this.pagerServic.getPager(this.bikeList.length, page);
    this.pagetItems = this.bikeList.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }

  ngOnInit() {
    this.setPage(1);
     this.onSelect(null);
  }

}
