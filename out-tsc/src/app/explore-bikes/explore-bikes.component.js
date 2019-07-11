import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Bike } from '../bike';
import { Http } from '@angular/http';
var ExploreBikesComponent = /** @class */ (function () {
    function ExploreBikesComponent(http) {
        var _this = this;
        http.get('https://raw.githubusercontent.com/Nikola-Dalcevski/test-api/master/db.json')
            .subscribe(function (res) {
            var data = res.json().Bikes;
            _this.bikes = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var bike = data_1[_i];
                _this.bikes.push(new Bike(bike));
                _this.isFinised = true;
            }
        });
        //    this.filter.forEach(type => {
        //     this.bikes.filter(bike => bike.brand === type || bike.type === type || bike.tireSize == type);
        //   })
        //  console.log(this.bikes);
    }
    ExploreBikesComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], ExploreBikesComponent.prototype, "filter", void 0);
    ExploreBikesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-explore-bikes',
            templateUrl: './explore-bikes.component.html',
            styleUrls: ['./explore-bikes.component.css'],
        }),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], ExploreBikesComponent);
    return ExploreBikesComponent;
}());
export { ExploreBikesComponent };
//# sourceMappingURL=explore-bikes.component.js.map