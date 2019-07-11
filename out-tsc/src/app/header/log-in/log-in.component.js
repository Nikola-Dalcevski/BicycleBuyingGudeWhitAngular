import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthFirebaseService } from '../../auth-firebase.service';
var LogInComponent = /** @class */ (function () {
    function LogInComponent(authService) {
        this.authService = authService;
        this.userManu = false;
        this.userName = "nikola";
    }
    LogInComponent.prototype.onChange = function (data) {
        console.log(data);
    };
    LogInComponent.prototype.onSubmit = function (logInForm) {
        this.email = logInForm.value.email;
        this.password = logInForm.value.pass;
        this.login();
    };
    LogInComponent.prototype.login = function () {
        var _this = this;
        this.authService.login(this.email, this.password);
        this.email = "";
        this.password = "";
        this.authService.user.subscribe(function (x) {
            console.log(x.displayName);
            _this.userManu = x.displayName ? true : false;
            console.log(_this.userManu);
        });
    };
    LogInComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authService.sendLoginError.subscribe(function (loginError) { return _this.loginError = loginError; });
        this.authService.user.subscribe(function (x) {
            console.log(x.displayName);
            _this.userManu = x.displayName ? true : false;
            console.log(_this.userManu);
        });
    };
    LogInComponent = tslib_1.__decorate([
        Component({
            selector: 'log-in',
            templateUrl: './log-in.component.html',
            styleUrls: ['./log-in.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [AuthFirebaseService])
    ], LogInComponent);
    return LogInComponent;
}());
export { LogInComponent };
//# sourceMappingURL=log-in.component.js.map