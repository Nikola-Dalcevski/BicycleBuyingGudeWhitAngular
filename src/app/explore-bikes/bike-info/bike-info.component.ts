import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../../bike';
import { ActivatedRoute } from '@angular/router';
import { ShowBikesComponent } from '../show-bikes/show-bikes.component';
import { BikeInfoService } from 'src/app/bike-info.service';
import { AngularFireDatabase} from 'angularfire2/database';
import { AuthFirebaseService } from 'src/app/auth-firebase.service';
import { defineBase } from '@angular/core/src/render3';
import { userInfo } from 'os';
@Component({
  selector: 'bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.css'],
  providers: [ShowBikesComponent]
})

export class BikeInfoComponent implements OnInit {
   @Input() bike: Bike;
   bikeInfo: Bike;
   test;
   userId;
  constructor(private data: BikeInfoService,private db: AngularFireDatabase, private authService: AuthFirebaseService) {
    
   

  //  this.authService.user.subscribe(x => this.userId = x.uid);
  //  this.test = db.list(`/users/${this.userId}`)
  //  console.log(this.test);
  //   console.log(db.list("/users/0RizcYPXWfg1ZQgIiEb3FW0ViMZ2").snapshotChanges().subscribe(x => console.log(typeof x)));


     this.data.currentBikeInfo.subscribe(bikeInfo => this.bikeInfo = bikeInfo)

     this.bike = this.bikeInfo;

  //   console.log("test");

 
   }


   addBike(){
    
      this.db.list(`/users/${this.userId}`).push(this.bike);
   }
  
  ngOnInit() {

    
    console.log("bikeinfo init called")
  }

}
