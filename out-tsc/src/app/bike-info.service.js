import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
var BikeInfoService = /** @class */ (function () {
    function BikeInfoService() {
        this.bikeInfo = new BehaviorSubject(null);
        this.currentBikeInfo = this.bikeInfo.asObservable();
    }
    BikeInfoService.prototype.changeBikeInfo = function (bikeInf) {
        this.bikeInfo.next(bikeInf);
    };
    BikeInfoService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BikeInfoService);
    return BikeInfoService;
}());
export { BikeInfoService };
//# sourceMappingURL=bike-info.service.js.map