import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFirebaseService } from './shared services/auth-firebase.service';
import { HttpUserBikesService } from './shared services/http-user-bikes.service';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    AuthFirebaseService,
    HttpUserBikesService,


  ],
  exports: [
     FooterComponent,
  ],

})
export class SharedModuleModule { 
  static forRoot(): ModuleWithProviders
  {
    return {
      ngModule: SharedModuleModule,
      providers: [
        AuthFirebaseService,
        HttpUserBikesService
      ],
    }
  }
}
