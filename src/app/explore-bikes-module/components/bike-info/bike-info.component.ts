import { Component, OnInit, Input} from '@angular/core';
import { Bike } from '../../../bike';
import { ShowBikesComponent } from '../show-bikes/show-bikes.component';
import { BikeInfoService } from '../../services/bike-info.service';
import { AngularFireDatabase} from 'angularfire2/database';
import { AuthFirebaseService } from 'src/app/shared services/auth-firebase.service';


@Component({
  selector: 'bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.css'],
  providers: [ShowBikesComponent]
})

export class BikeInfoComponent implements OnInit {
   @Input() bike: Bike;
   bikeInfo: Bike;
  
   userId;
  constructor(private data: BikeInfoService,private db: AngularFireDatabase, private authService: AuthFirebaseService) { }


   addBike(){
     if(this.authService.userId){
      this.userId = this.authService.userId;
       this.db.list(`/${this.userId}/bikes`).push(this.bike.fullName);
    
     }
      
   }
  
  ngOnInit() {
     
     
    console.log("info")
    this.data.currentBikeInfo.subscribe(bikeInfo => this.bike = bikeInfo);
   

    // this.bike = this.bikeInfo;
    

  }
  

}
