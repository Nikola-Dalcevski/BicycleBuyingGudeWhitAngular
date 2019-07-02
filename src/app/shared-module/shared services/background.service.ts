import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BackgroundService {
  imageNumber;
  constructor() { }
  private Images = new BehaviorSubject<number>(null);
  sendImage = this.Images.asObservable();


  
  changeBackGround(){
    let number = 1;
    let newNumber
    setInterval(() => {
        newNumber = ++number;
        if(newNumber > 4) newNumber = 1, number = 1;
        this.Images.next(newNumber)
    }, 8000)
    
  }
}
