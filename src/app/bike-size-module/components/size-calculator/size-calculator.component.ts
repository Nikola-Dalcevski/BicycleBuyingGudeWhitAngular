import { Component, OnInit } from '@angular/core';
import { BikeSizeCalculatorService } from '../../Services/bike-size-calculator.service';
import { BikeSizeInseamCalculatorService } from '../../Services/bike-size-inseam-calculator.service';
import { AuthFirebaseService } from 'src/app/shared-module/shared services/auth-firebase.service';
import { AngularFireDatabase } from 'angularfire2/database';


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
  userId;


  constructor(private data: BikeSizeInseamCalculatorService,
    private bikeData: BikeSizeCalculatorService,
    private authService: AuthFirebaseService,
    private db: AngularFireDatabase
  ) { }

  calculateSizes() {
    for (this.minHeight; this.minHeight <= this.maxHeight; this.minHeight++) {
      this.heightSizes.push(this.minHeight);
    }
  }

  addBike() {
    if (this.authService.userId) {
      this.userId = this.authService.userId;
      this.db.list(`/${this.userId}/sizes`).set("size", this.bikeSizes);
    }
  }

  changeHeight(model) {
    this.data.changeSizeInseam(model.value)
    this.height = model.value;
    console.log(this.height);
  }

  onSubmit(form) {
    let userHeight = form.value.height
    let userInseam = form.value.inseam
    form.reset();
    if (userHeight && userInseam) {
      this.bikeData.calculateSizeBike(userHeight, userInseam);
    }
  }


  ngOnInit() {
    this.inseamSizes = [];
    this.heightSizes = new Array();
    this.calculateSizes();
    this.data.sendSizeInseam.subscribe(x => this.inseamSizes = x);
    this.bikeData.sendBikeSize.subscribe(x => {
      this.bikeSizes = x
    });

  }
}
