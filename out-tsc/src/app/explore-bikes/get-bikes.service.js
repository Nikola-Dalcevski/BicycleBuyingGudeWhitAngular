import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Bike } from '../bike';
var GetBikesService = /** @class */ (function () {
    function GetBikesService(http) {
        var _this = this;
        http.get('https://raw.githubusercontent.com/Nikola-Dalcevski/test-api/master/db.json')
            .subscribe(function (res) {
            var data = res.json().Bikes;
            _this.bikes = [];
            for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
                var bike = data_1[_i];
                _this.bikes.push(new Bike(bike));
            }
        });
    }
    GetBikesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Http])
    ], GetBikesService);
    return GetBikesService;
}());
export { GetBikesService };
//# sourceMappingURL=get-bikes.service.js.map