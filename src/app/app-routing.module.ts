import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
import { TypeOfBikesComponent } from './type-of-bikes/type-of-bikes.component';
import { BikeFeaturesComponent } from './bike-features/bike-features.component';
import { SizeCalculatorComponent } from './size-calculator/size-calculator.component';
import { BikeInfoComponent } from './explore-bikes/bike-info/bike-info.component';
import { ExploreBikesComponent } from './explore-bikes/explore-bikes.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
  {path: '', component: TypeOfBikesComponent},
  {path: 'bikeFeatures', component: BikeFeaturesComponent},
  {path: 'sizeCalculator', component: SizeCalculatorComponent},
  {path: 'exploreBikes/:bikename', component: BikeInfoComponent},
  {path: 'exploreBikes', component: ExploreBikesComponent},
  {path: 'registerUser', component: RegisterUserComponent},
  
  {path: '**', component: NotFoundComponent }

]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
     
    )
  ],
  exports: [RouterModule]
})
export class ApRoutingModule { }
