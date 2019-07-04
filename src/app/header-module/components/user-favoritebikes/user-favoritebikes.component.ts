import { Component, OnInit } from '@angular/core';
import { HttpUserBikesService } from 'src/app/shared-module/shared services/http-user-bikes.service';






@Component({
  selector: 'app-user-favoritebikes',
  templateUrl: './user-favoritebikes.component.html',
  styleUrls: ['./user-favoritebikes.component.css'],
  
})
export class UserFavoritebikesComponent implements OnInit {
  
  linkBikes ;
  userBikes ;
  usersizes;
  constructor(private getDAta: HttpUserBikesService) { }


  

  ngOnInit() {
    
  
     this.getDAta.FetchUsersBikes().subscribe(x => {
      console.log(x);
    this.userBikes = [];
    this.linkBikes = [];
    console.log(this.userBikes);
     this.userBikes = x;
   
     if(this.userBikes){
       this.userBikes.bikes.forEach(bike => this.linkBikes.push(bike.replace(/\s/g, '-').toLowerCase()));  
     }});
   }

}
