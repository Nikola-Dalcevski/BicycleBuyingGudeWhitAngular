import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TypeOfBikesComponent } from './type-of-bikes/type-of-bikes.component';
import { HttpModule } from '@angular/http';
import { HomeComponentComponent } from './home-component/home-component.component';
import { BikeFeaturesComponent } from './bike-features/bike-features.component';
import { SizeCalculatorComponent } from './size-calculator/size-calculator.component';
import { ExploreBikesComponent } from './explore-bikes/explore-bikes.component';
import { RegisterUserComponent } from './register-user/register-user.component'
import { NotFoundComponent } from './not-found/not-found.component';
import { BikeInfoComponent } from './explore-bikes/bike-info/bike-info.component';
import { TypeOfBikeRoadComponent } from './type-of-bikes/type-of-bike-road/type-of-bike-road.component';
import { TypeOfBikeMountainComponent } from './type-of-bikes/type-of-bike-mountain/type-of-bike-mountain.component';
import { TypeOfBikeHibridComponent } from './type-of-bikes/type-of-bike-hibrid/type-of-bike-hibrid.component';
import { BikeFeaturesWheelsizeGearsComponent } from './bike-features/bike-features-wheelsize-gears/bike-features-wheelsize-gears.component';
import { BikeFeaturesBrakeSuspenHandelbarComponent } from './bike-features/bike-features-brake-suspen-handelbar/bike-features-brake-suspen-handelbar.component';
import { FilterBikesComponent } from './explore-bikes/filter-bikes/filter-bikes.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { ShowBikesComponent } from './explore-bikes/show-bikes/show-bikes.component'
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthFirebaseService } from './auth-firebase.service';
import { LogInComponent } from './header/log-in/log-in.component';
import { UserMenuComponent } from './header/user-menu/user-menu.component';








@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TypeOfBikesComponent,
    HomeComponentComponent,
    BikeFeaturesComponent,
    SizeCalculatorComponent,
    ExploreBikesComponent,
    RegisterUserComponent,
    NotFoundComponent,
    BikeInfoComponent,
    TypeOfBikeRoadComponent,
    TypeOfBikeMountainComponent,
    TypeOfBikeHibridComponent,
    BikeFeaturesWheelsizeGearsComponent,
    BikeFeaturesBrakeSuspenHandelbarComponent,
    FilterBikesComponent,
    ShowBikesComponent,
    LogInComponent,
    UserMenuComponent
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
     // {path: '', component: HomeComponentComponent},
      {path: '', component: TypeOfBikesComponent},
      {path: 'bikeFeatures', component: BikeFeaturesComponent},
      {path: 'sizeCalculator', component: SizeCalculatorComponent},
      {path: 'exploreBikes/:bikename', component: BikeInfoComponent},
      {path: 'exploreBikes', component: ExploreBikesComponent},
      {path: 'registerUser', component: RegisterUserComponent},
      
      {path: '**', component: NotFoundComponent }

      
    ]),
    HttpModule,
    AngularFontAwesomeModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firabase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
  
    
  
    
    

  ],
  providers: [AuthFirebaseService],
  bootstrap: [AppComponent]

})
export class AppModule { }
