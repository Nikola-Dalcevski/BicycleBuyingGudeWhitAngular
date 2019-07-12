import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { TypeOfBikesComponent } from '../type-of-bike-module/components/type-of-bikes/type-of-bikes.component';
import { BikeFeaturesComponent } from '../bike-features-module/components/bike-features/bike-features.component';
import { SizeCalculatorComponent } from '../bike-size-module/components/size-calculator/size-calculator.component';
import { BikeInfoComponent } from '../explore-bikes-module/components/bike-info/bike-info.component';
import { ExploreBikesComponent } from '../explore-bikes-module/components/explore-bikes/explore-bikes.component';
import { RegisterUserComponent } from '../register-user-module/components/register-user/register-user.component';
import { NotFoundComponent } from '../shared-module/components/not-found/not-found.component';
import { UserFavoritebikesComponent } from '../header-module/components/user-favoritebikes/user-favoritebikes.component';

const appRoutes: Routes = [
  {path: '', component: TypeOfBikesComponent},
  {path: 'bikefeatures', component: BikeFeaturesComponent},
  {path: 'sizecalculator', component: SizeCalculatorComponent},
  {path: 'explorebikes', component: ExploreBikesComponent },
  {path: 'explorebikes/:bikename',component: BikeInfoComponent},
  {path: 'registeruser', component: RegisterUserComponent},  
  {path: 'favoritesBikes', component: UserFavoritebikesComponent},
  {path: '**', component: NotFoundComponent }

]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(
      appRoutes,
     
    )
  ],
  exports: [RouterModule]
})
export class ApRoutingModule { }
