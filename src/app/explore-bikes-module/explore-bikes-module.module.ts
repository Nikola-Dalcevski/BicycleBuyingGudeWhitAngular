import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BikeInfoComponent } from './components/bike-info/bike-info.component';
import { ExploreBikesComponent } from './components/explore-bikes/explore-bikes.component';
import { FilterBikesComponent } from './components/filter-bikes/filter-bikes.component';
import { ShowBikesComponent } from './components/show-bikes/show-bikes.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  declarations: [
    BikeInfoComponent,
    ExploreBikesComponent,
    FilterBikesComponent,
    ShowBikesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SharedModuleModule
  ]
})
export class ExploreBikesModuleModule { }
