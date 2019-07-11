import { NgModule } from '@angular/core';
import { TypeOfBikeHibridComponent} from './components/type-of-bike-hibrid/type-of-bike-hibrid.component'
import { TypeOfBikeMountainComponent } from './components/type-of-bike-mountain/type-of-bike-mountain.component';
import { TypeOfBikeRoadComponent } from './components/type-of-bike-road/type-of-bike-road.component';
import { TypeOfBikesComponent } from './components/type-of-bikes/type-of-bikes.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TypeOfBikeHibridComponent,
    TypeOfBikeMountainComponent,
    TypeOfBikeRoadComponent,
    TypeOfBikesComponent
  ],
  imports: [
     RouterModule
  ]
})
export class TypeOfBikeModuleModule { }
