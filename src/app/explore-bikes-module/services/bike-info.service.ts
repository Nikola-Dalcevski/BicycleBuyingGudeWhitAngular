import { Injectable } from '@angular/core';


import { Bike } from '../../bike';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BikeInfoService {
 private bikeInfo = new BehaviorSubject<Bike>(null);
 currentBikeInfo = this.bikeInfo.asObservable();
  constructor() { }

  changeBikeInfo(bikeInf: Bike){
    this.bikeInfo.next(bikeInf)
  }
}
