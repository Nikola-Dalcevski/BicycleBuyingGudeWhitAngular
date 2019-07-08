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
  test: [];
  s: string;
  constructor(private getDAta: HttpUserBikesService,
     private db: AngularFireDatabase,
     private auth: AuthFirebaseService) { 
       console.log()
     }

  remove(bike){
   
   let me =  this.test.find(x => {
     this.s = x[1];
     return this.s.toLowerCase() === bike.replace(/\-/g, ' ');
    
   });

    
    this.userId = this.auth.userId;
    console.log(this.userId);
    
    this.db.list(`/${this.userId}/bikes`).remove(me[0]);
    this.getDAta.FetchUsersBikes();
 
  
   console.log(me)
       
   
  }
  ngOnInit() {

    
    this.getDAta.FetchUsersBikes().subscribe(x => {
      this.userBikes = [];
      this.linkBikes = [];
      this.userBikes = x;
      console.log(this.userBikes);
    
    
       
      if (this.userBikes) {
        this.userBikes.bikes.forEach(bike => this.linkBikes.push(bike.replace(/\s/g, '-').toLowerCase()));
        this.usersizes = this.userBikes.sizes;
        this.test = this.userBikes.test;
       
      }
      
      
    
    });
  }
  

}
