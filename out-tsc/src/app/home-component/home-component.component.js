import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
var HomeComponentComponent = /** @class */ (function () {
    function HomeComponentComponent(db) {
        this.users = db.list('/users/users');
        console.log(this.users);
    }
    HomeComponentComponent.prototype.ngOnInit = function () {
    };
    HomeComponentComponent = tslib_1.__decorate([
        Component({
            selector: 'app-home-component',
            templateUrl: './home-component.component.html',
            styleUrls: ['./home-component.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireDatabase])
    ], HomeComponentComponent);
    return HomeComponentComponent;
}());
export { HomeComponentComponent };
//# sourceMappingURL=home-component.component.js.map