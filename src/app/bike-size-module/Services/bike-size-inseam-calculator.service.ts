import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
    providedIn: 'root'
})
export class BikeSizeInseamCalculatorService {
    private sizeInseam = new BehaviorSubject<any>([]);
    sendSizeInseam = this.sizeInseam.asObservable();

    inseamSizes = new Array();

    constructor() { }

    changeSizeInseam(value: number) {
        let min;
        let max;
        switch (true) {
            case value <= 158:
                min = 61; max = 73;
                break;
            case value <= 168:
                min = 63, max = 76;
                break;
            case value <= 178:
                min = 66, max = 78;
                break;
            case value <= 185:
                min = 68, max = 81;
                break;
            case value <= 193:
                min = 71, max = 83;
                break;
            case value < 193:
                min = 73, max = 86;
                break;
            default:
                console.log("error");
        }

        this.inseamSizes = [];
        for (min; min <= max; min++) {
            this.inseamSizes.push(min);
        }
        
        this.sizeInseam.next(this.inseamSizes);
    }














}



