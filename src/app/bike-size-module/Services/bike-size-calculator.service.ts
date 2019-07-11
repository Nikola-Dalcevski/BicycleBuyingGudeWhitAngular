import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class BikeSizeCalculatorService {
  private bikeSize = new BehaviorSubject<any>([]);
  sendBikeSize = this.bikeSize.asObservable();
  constructor() { }


  calculateSizeBike(height: number, inseam:number){
    let sizebike =[ {
      MountHibrid: {
          inches: "",
          size: ""
      },
      Road: {
          inches: "",
          size: "",
      }
  },
]
    switch (true) {
      case (height <= 158 && inseam <= 73):
          sizebike[0].MountHibrid.inches = '<14"';
          sizebike[0].MountHibrid.size = "XS";
          break;
      case (height <= 168 && inseam <= 76):
          sizebike[0].MountHibrid.inches = '15"/16"';
          sizebike[0].MountHibrid.size = "S";
          break;
      case (height <= 178 && inseam <= 78):
          sizebike[0].MountHibrid.inches = '16"/17"';
          sizebike[0].MountHibrid.size = "M";
          break;
      case (height <= 185 && inseam <= 81):
          sizebike[0].MountHibrid.inches = '17"/18"';
          sizebike[0].MountHibrid.size = "L";
          break;
      case (height <= 193 && inseam <= 83):
          sizebike[0].MountHibrid.inches = '18"/19"';
          sizebike[0].MountHibrid.size = "XL";
          break;
      case (height > 193 && inseam > 73):
          sizebike[0].MountHibrid.inches = '19"+';
          sizebike[0].MountHibrid.size = "XXL";
          break;
  }



  switch (true) {
    case height <= 152:
        sizebike[0].Road.inches = '18"';
        sizebike[0].Road.size = 'XXS';
        break;
    case height <= 160:
        sizebike[0].Road.inches = '19"';
        sizebike[0].Road.size = 'XS';
        break;
    case height <= 168:
        sizebike[0].Road.inches = '20"';
        sizebike[0].Road.size = 'S';
        break;
    case height <= 175:
        sizebike[0].Road.inches = '21"';
        sizebike[0].Road.size = 'M';
        break;
    case height <= 183:
        sizebike[0].Road.inches = '22"';
        sizebike[0].Road.size = 'L';
        break;
    case height <= 191:
        sizebike[0].Road.inches = '23"';
        sizebike[0].Road.size = 'XL';
        break;
    case height > 191:
        sizebike[0].Road.inches = '23"+';
        sizebike[0].Road.size = 'XXL';
        break;

}

this.bikeSize.next(sizebike);

  }
}
