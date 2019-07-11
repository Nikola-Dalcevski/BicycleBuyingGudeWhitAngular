import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent() {
    }
    UserMenuComponent.prototype.log = function (model) {
        console.log(model);
    };
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], UserMenuComponent.prototype, "name", void 0);
    UserMenuComponent = tslib_1.__decorate([
        Component({
            selector: 'user-menu',
            templateUrl: './user-menu.component.html',
            styleUrls: ['./user-menu.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], UserMenuComponent);
    return UserMenuComponent;
}());
export { UserMenuComponent };
//# sourceMappingURL=user-menu.component.js.map