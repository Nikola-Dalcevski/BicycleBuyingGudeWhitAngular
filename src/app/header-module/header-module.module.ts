import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent,
    LogInComponent,
    UserMenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    
],

})
export class HeaderModuleModule { }
