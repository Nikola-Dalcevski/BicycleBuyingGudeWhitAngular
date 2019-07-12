import { Component, OnInit } from '@angular/core';
import { HttpUserBikesService } from 'src/app/shared-module/shared services/http-user-bikes.service';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthFirebaseService } from 'src/app/shared-module/shared services/auth-firebase.service';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';



@Component({
  selector: 'app-user-favoritebikes',
  templateUrl: './user-favoritebikes.component.html',
  styleUrls: ['./user-favoritebikes.component.css'],

})
export class UserFavoritebikesComponent implements OnInit {

  linkBikes;
  userBikes;
  usersizes;
  userId;
  bikesFirebaseIds: [];
  bikeFirebaseId: string;


  constructor(private getDAta: HttpUserBikesService,
    private db: AngularFireDatabase,
    private auth: AuthFirebaseService) {
  }




  remove(bike) {

    let removeBike = this.bikesFirebaseIds.find(x => {
      this.bikeFirebaseId = x[1];
      return this.bikeFirebaseId.toLowerCase() === bike.replace(/\-/g, ' ');

    });

    this.userId = this.auth.userId;
    this.db.list(`/${this.userId}/bikes`).remove(removeBike[0]);
    this.getDAta.FetchUsersBikes();

  }
  ngOnInit() {
    if (this.auth.userId) {
      this.getDAta.FetchUsersBikes().subscribe(x => {

        this.userBikes = [];
        this.linkBikes = [];
        this.userBikes = x;

        if (this.userBikes) {
          this.userBikes.bikes.forEach(bike => this.linkBikes.push(bike.replace(/\s/g, '-').toLowerCase()));
          this.usersizes = this.userBikes.sizes;
          this.bikesFirebaseIds = this.userBikes.bikesFirebaseIds;

        }
      });
    }

  }


}
