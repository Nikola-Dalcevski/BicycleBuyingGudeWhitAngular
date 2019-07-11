import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthFirebaseService } from '../auth-firebase.service';
var RegisterUserComponent = /** @class */ (function () {
    function RegisterUserComponent(authService) {
        this.authService = authService;
    }
    RegisterUserComponent.prototype.onSubmit = function (event) {
        this.email = event.srcElement[2].value;
        this.password = event.srcElement[3].value;
        this.signUp();
        this.test(event.srcElement[0].value);
    };
    RegisterUserComponent.prototype.signUp = function () {
        this.authService.signup(this.email, this.password);
        this.email = "";
        this.password = "";
    };
    RegisterUserComponent.prototype.logout = function () {
        this.authService.logout();
    };
    RegisterUserComponent.prototype.test = function (name) {
        this.authService.user.subscribe(function (user) { return user.updateProfile({ displayName: name }); });
        console.log(this.authService.user);
    };
    RegisterUserComponent.prototype.ngOnInit = function () {
    };
    RegisterUserComponent = tslib_1.__decorate([
        Component({
            selector: 'app-register-user',
            templateUrl: './register-user.component.html',
            styleUrls: ['./register-user.component.css'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthFirebaseService])
    ], RegisterUserComponent);
    return RegisterUserComponent;
}());
export { RegisterUserComponent };
//# sourceMappingURL=register-user.component.js.map