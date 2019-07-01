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

  filterBikes(filtersObject, BikeList) {

    let typeFilters = [];
    let brandFilters = [];
    let sizeFilters = [];
    let filterBikesType = [];
    let filterBikesBrand = [];
    let filterBikesSize = [];
    let test;

    for (let element of filtersObject) {

      if (element.checked && element.name == "Type") typeFilters.push(element.value);
      else if (element.checked && element.name == "Brand") brandFilters.push(element.value);
      else if (element.checked && element.name == "Size") sizeFilters.push(element.value);
    }

    if (typeFilters.length) {
      typeFilters.forEach(type => {
        test = BikeList.filter(bike => bike.type === type);
        filterBikesType.push(...test);
      })
    } else {
      filterBikesType = BikeList
    }


    if (brandFilters.length) {
      brandFilters.forEach(brand => {
        test = filterBikesType.filter(bike => bike.brand == brand)
        filterBikesBrand.push(...test);
      });

    } else {
      filterBikesBrand = filterBikesType
    }


    if (sizeFilters.length) {
      sizeFilters.forEach(size => {
        test = filterBikesBrand.filter(bike => bike.tireSize == size)
        filterBikesSize.push(...test);
      });
    } else {
      filterBikesSize = filterBikesBrand
    }

    this.filteredBikes = filterBikesSize;
    this.filterSendBikes.next(this.filteredBikes);


  }


  searchBikes(inputSearch, BikeList){
    let SortedBikes = [];

    BikeList.forEach(bike => {
      if(bike.fullName.toLowerCase().includes(inputSearch.toLowerCase())) SortedBikes.push(bike);
    })
     this.filterSendBikes.next(SortedBikes);
  }
}

