import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { NotFoundComponent } from './not-found/not-found.component';

import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { FormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthFirebaseService } from './shared services/auth-firebase.service';

import { ApRoutingModule } from './app-routing-module/app-routing.module';

import { TypeOfBikeModuleModule } from './type-of-bike-module/type-of-bike-module.module';
import { BikeFeaturesModuleModule } from './bike-features-module/bike-features-module.module';
import { BikeSizeModuleModule } from './bike-size-module/bike-size-module.module';
import { ExploreBikesModuleModule } from './explore-bikes-module/explore-bikes-module.module';
import { HeaderModuleModule } from './header-module/header-module.module';
import { RegisterUserModuleModule } from './register-user-module/register-user-module.module';
import { HttpUserBikesService } from './shared services/http-user-bikes.service';









@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFontAwesomeModule,
    // FormsModule,
    AngularFireModule.initializeApp(environment.firabase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    ApRoutingModule,
    TypeOfBikeModuleModule,
    BikeFeaturesModuleModule,
    BikeSizeModuleModule,
    ExploreBikesModuleModule,
    HeaderModuleModule,
    RegisterUserModuleModule,
  
    
  ],
  providers: [
    AuthFirebaseService,
    HttpUserBikesService,
   

  ],
 
  bootstrap: [AppComponent]
})
export class AppModule { }
