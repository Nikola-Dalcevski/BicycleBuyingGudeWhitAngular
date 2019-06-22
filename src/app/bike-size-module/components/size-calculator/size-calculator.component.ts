import { Component, OnInit } from '@angular/core';
import { BikeSizeCalculatorService } from '../../Services/bike-size-calculator.service';
import { BikeSizeInseamCalculatorService } from '../../Services/bike-size-inseam-calculator.service';


@Component({
  selector: 'app-size-calculator',
  templateUrl: './size-calculator.component.html',
  styleUrls: ['./size-calculator.component.css']
})
export class SizeCalculatorComponent implements OnInit {
  heightSizes;
  inseamSizes;
  bikeSizes = null;
   minHeight = 150;
   maxHeight = 192;
   height;
  
 
  constructor(private data: BikeSizeInseamCalculatorService, private bikeData: BikeSizeCalculatorService) {
      this.inseamSizes = [];
       this.heightSizes = new Array();
       this.calculateSizes();
       console.log("constructor called");
      
      
   }

   calculateSizes(){
    for(this.minHeight;this.minHeight <= this.maxHeight; this.minHeight++){
      this.heightSizes.push(this.minHeight);
    }
   }

   

   changeHeight(model){
     
    this.data.changeSizeInseam(model.value)
     this.height = model.value;
     console.log(this.height);
      
   }
   onSubmit(form){
        console.log(form);
        
     let userHeight = form.value.height
     let userInseam = form.value.inseam
     form.reset();
     this.bikeData.calculateSizeBike(userHeight,userInseam);
    
}

  ngOnInit() {
    

    this.data.sendSizeInseam.subscribe(x => this.inseamSizes = x);
    this.bikeData.sendBikeSize.subscribe(x => {
    
      this.bikeSizes = x
      console.log(this.bikeSizes)});
 
 
  }
 
 
   
    
   
  
}
