import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Bike } from 'src/app/shared-module/Models/bike';
import { FilterServicesService } from '../../services/filter-services.service';
import { ShowBikesComponent } from '../show-bikes/show-bikes.component';


@Component({
  selector: 'filter-bikes',
  templateUrl: './filter-bikes.component.html',
  styleUrls: [
    './filter-bikes.component.css',
    "../../../../../node_modules/font-awesome/css/font-awesome.css"
  ],
})

export class FilterBikesComponent implements OnInit {

  @Input() BikesList;
  // @ViewChild(ShowBikesComponent)
  private child: ShowBikesComponent
  filteredBikes: Bike[];
  usedfilter: boolean;
  selBike;


  constructor(private filterService: FilterServicesService) {

  }

  onSubmit(event) {
    this.usedfilter = true;
    let elements = event.target.elements;
    this.filterService.filterBikes(elements, this.BikesList);
  }



  showFilteredBikesOrAllbikes() {
    if (this.usedfilter) {
      this.filteredBikes = this.selBike;
    }
    else {
      this.filteredBikes = this.BikesList;
    }
  }

  SearchFunction(form) {
    this.usedfilter = true;
    let search = form.value.search;
    this.filterService.searchBikes(search, this.BikesList)
  }



  ngOnInit() {

    
     this.filterService.sendBikeList.subscribe(bikes => {
      this.selBike = bikes;
      this.showFilteredBikesOrAllbikes();
    });
  }
}
