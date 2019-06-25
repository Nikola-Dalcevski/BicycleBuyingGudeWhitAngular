import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFirebaseService } from './shared services/auth-firebase.service';
import { HttpUserBikesService } from './shared services/http-user-bikes.service';
import { Bike } from '../bike' 

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    AuthFirebaseService,
    HttpUserBikesService,

  ],
exports: [

 

]

})
export class SharedModuleModule { }
