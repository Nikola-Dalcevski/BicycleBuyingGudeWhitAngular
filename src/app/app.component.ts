import { Component, OnInit, Input, SimpleChange, SimpleChanges } from '@angular/core';

import { BackgroundService } from './shared-module/shared services/background.service';
import { ChangeDetectorStatus } from '@angular/core/src/change_detection/constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  imgUrl;
  

 
  constructor(private bgc: BackgroundService){}

  title = 'bicycleBuyingGuide';

  ngOnInit() {
    this.bgc.changeBackGround();
    this.bgc.sendImage.subscribe(x =>{
      if(!x){
        x = 1;
      }
      this.imgUrl = `../assets/Images/background${x}.jpg`;
    });
    
  }

}
