import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SizeCalculatorComponent } from './components/size-calculator/size-calculator.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SizeCalculatorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BikeSizeModuleModule { }
