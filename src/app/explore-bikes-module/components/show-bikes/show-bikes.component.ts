import { Component, OnInit, Input, OnChanges, SimpleChange} from '@angular/core';
import { Bike } from '../../../shared-module/Models/bike';
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
  number =1;

  constructor( private pagerServic: PagerService) { };
    pager: any = {};
    

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
    this.setPage(1);  
  }

}
