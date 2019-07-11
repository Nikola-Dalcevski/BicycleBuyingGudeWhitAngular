import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeFeaturesComponent } from './components/bike-features/bike-features.component';
import { BikeFeaturesWheelsizeGearsComponent } from './components/bike-features-wheelsize-gears/bike-features-wheelsize-gears.component';
import { BikeFeaturesBrakeSuspenHandelbarComponent } from './components/bike-features-brake-suspen-handelbar/bike-features-brake-suspen-handelbar.component';
import { RouterModule, Router } from '@angular/router';

@NgModule({
  declarations: [
    BikeFeaturesComponent,
    BikeFeaturesWheelsizeGearsComponent,
    BikeFeaturesBrakeSuspenHandelbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class BikeFeaturesModuleModule { }
