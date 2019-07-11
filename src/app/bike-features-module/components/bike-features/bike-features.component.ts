import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bike-features',
  templateUrl: './bike-features.component.html',
  styleUrls: ['./bike-features.component.css']
})
export class BikeFeaturesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    window.scrollTo(0, 0)
  }

}
