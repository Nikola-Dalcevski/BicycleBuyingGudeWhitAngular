import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Bike } from '../../bike';
import { ShowBikesComponent } from '../show-bikes/show-bikes.component';
import { BikeInfoService } from 'src/app/bike-info.service';
var BikeInfoComponent = /** @class */ (function () {
    function BikeInfoComponent(data) {
        this.data = data;
        console.log("test");
    }
    BikeInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // this.route.paramMap
        // .subscribe(parm => console.log(parm))
        this.data.currentBikeInfo.subscribe(function (bikeInfo) { return _this.bikeInfo = bikeInfo; });
        console.log(this.bikeInfo);
        this.bike = this.bikeInfo;
        console.log(this.bike);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Bike)
    ], BikeInfoComponent.prototype, "bike", void 0);
    BikeInfoComponent = tslib_1.__decorate([
        Component({
            selector: 'bike-info',
            templateUrl: './bike-info.component.html',
            styleUrls: ['./bike-info.component.css'],
            providers: [ShowBikesComponent]
        }),
        tslib_1.__metadata("design:paramtypes", [BikeInfoService])
    ], BikeInfoComponent);
    return BikeInfoComponent;
}());
export { BikeInfoComponent };
//# sourceMappingURL=bike-info.component.js.map