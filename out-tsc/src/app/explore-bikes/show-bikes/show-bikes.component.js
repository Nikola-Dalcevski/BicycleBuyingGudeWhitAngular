import * as tslib_1 from "tslib";
import { Component, Input, } from '@angular/core';
import { BikeInfoService } from 'src/app/bike-info.service';
var ShowBikesComponent = /** @class */ (function () {
    function ShowBikesComponent(data) {
        this.data = data;
    }
    ShowBikesComponent.prototype.onSelect = function (bike) {
        this.data.changeBikeInfo(bike);
    };
    ShowBikesComponent.prototype.ngOnInit = function () {
        console.log("init is called");
    };
    ShowBikesComponent.prototype.ngOnDestroy = function () {
        var _this = this;
        this.data.currentBikeInfo.subscribe(function (bikeInfo) { return _this.bikeInfo = bikeInfo; });
        // console.log(this.selectedBike);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ShowBikesComponent.prototype, "bikeList", void 0);
    ShowBikesComponent = tslib_1.__decorate([
        Component({
            selector: 'show-bikes',
            templateUrl: './show-bikes.component.html',
            styleUrls: ['./show-bikes.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [BikeInfoService])
    ], ShowBikesComponent);
    return ShowBikesComponent;
}());
export { ShowBikesComponent };
//# sourceMappingURL=show-bikes.component.js.map