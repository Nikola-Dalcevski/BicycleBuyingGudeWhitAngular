import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
// import { showBikesComponent } from "../show-bikes/show-bikes.component"
var FilterBikesComponent = /** @class */ (function () {
    function FilterBikesComponent() {
    }
    FilterBikesComponent.prototype.onSubmit = function (f) {
        // console.log(this.filteredBikesList);
        f.preventDefault();
        this.filters = [];
        console.log(this.BikesList);
        console.log(typeof f.target.elements);
        for (var _i = 0, _a = f.target.elements; _i < _a.length; _i++) {
            var element = _a[_i];
            if (element.checked)
                this.filters.push(element.value);
        }
        this.filterBikes();
        //console.log(this.filters);
    };
    FilterBikesComponent.prototype.filterBikes = function () {
        var _this = this;
        this.bike = this.BikesList;
        this.filters.forEach(function (type) {
            _this.bike.filter(function (bike) { return bike.brand === type || bike.type === type || bike.tireSize == type; });
        });
        // this.filteredBikes = this.BikesList;
        console.log(this.filters);
        console.log(this.bike);
        console.log(this.filteredBikes);
    };
    FilterBikesComponent.prototype.ngOnInit = function () {
        // console.log(this.selBike);
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], FilterBikesComponent.prototype, "BikesList", void 0);
    FilterBikesComponent = tslib_1.__decorate([
        Component({
            selector: 'filter-bikes',
            templateUrl: './filter-bikes.component.html',
            styleUrls: [
                './filter-bikes.component.css',
                "../../../../node_modules/font-awesome/css/font-awesome.css"
            ]
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], FilterBikesComponent);
    return FilterBikesComponent;
}());
export { FilterBikesComponent };
//# sourceMappingURL=filter-bikes.component.js.map