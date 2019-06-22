import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    RegisterUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class RegisterUserModuleModule { }
