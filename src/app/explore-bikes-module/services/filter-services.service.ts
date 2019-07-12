import { Injectable } from '@angular/core';
import { Bike } from '../../shared-module/Models/bike';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
  export class FilterServicesService {
  Typefilters: string[];
  private filterSendBikes = new BehaviorSubject<Bike[]>(null);
  sendBikeList = this.filterSendBikes.asObservable();
  filteredBikes: Bike[];



  constructor() { }

  filterBikes(filtersList, BikeList) {

    let typeFilters = [];
    let brandFilters = [];
    let sizeFilters = [];

    
    let filterBikesType = [];
    let filterBikesBrand = [];
    let filterBikesSize = [];




    for (let element of filtersList) {
  
      if (element.checked && element.name == "Type") typeFilters.push(element.value);
      else if (element.checked && element.name == "Brand") brandFilters.push(element.value);
      else if (element.checked && element.name == "Size") sizeFilters.push(element.value);
    }


     filterBikesType = this.filterBikesBySection(typeFilters,BikeList,"type");
     filterBikesBrand = this.filterBikesBySection(brandFilters, filterBikesType, "brand");
     filterBikesSize = this.filterBikesBySection(sizeFilters,filterBikesBrand, "tireSize");
     this.filterSendBikes.next(filterBikesSize);


  }
 
  filterBikesBySection(filters: string[], listOfBikes: Bike[], bikeProperty: string ){
    let filterbikes;
    let listBike: Bike[] = [];
    if(filters.length){
      filters.forEach(item => {
        filterbikes = listOfBikes.filter(bike =>  bike[bikeProperty] == item
          )
       
        listBike.push(...filterbikes);
      })    
    }else {
      listBike = listOfBikes;     
    }

    return listBike;
  }


  searchBikes(inputSearch, BikeList) {
    let SortedBikes = [];

    BikeList.forEach(bike => {
      if (bike.fullName.toLowerCase().includes(inputSearch.toLowerCase())) SortedBikes.push(bike);
    })
    this.filterSendBikes.next(SortedBikes);
  }
}

