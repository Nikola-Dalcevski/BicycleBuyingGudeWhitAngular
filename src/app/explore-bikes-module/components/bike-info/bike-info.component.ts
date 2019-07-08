import { Component, OnInit, Input } from '@angular/core';
import { Bike } from '../../../shared-module/Models/bike';
import { ShowBikesComponent } from '../show-bikes/show-bikes.component';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthFirebaseService } from 'src/app/shared-module/shared services/auth-firebase.service';
import { ActivatedRoute } from '@angular/router';
import { GetBikesService } from '../../services/get-bikes.service';

@Component({
  selector: 'bike-info',
  templateUrl: './bike-info.component.html',
  styleUrls: ['./bike-info.component.css'],
  providers: [ShowBikesComponent]
})

export class BikeInfoComponent implements OnInit {
  bike: Bike;
  imageUrl = "../../assets/Images/image1.jpg";
  userId;

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthFirebaseService,
    private getBikes: GetBikesService,
    private activatedRoute: ActivatedRoute) { }


  addBike() {
    if (this.authService.userId) {
      this.userId = this.authService.userId;
      this.db.list(`/${this.userId}/bikes`).push(this.bike.fullName);
      // this.db.list(`/${this.userId}/bikes`).remove("");
    }
  }


  chageImage(c) {
    this.imageUrl = `../../assets/Images/image${c}.jpg`
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(param => {
      this.getBikes.sendBikes.subscribe(bikes => {
        if (bikes)
          this.bike = bikes.bikes.find(bike => bike.routeName === param.bikename);
      })
    })
  }
}
