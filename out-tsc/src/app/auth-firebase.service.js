import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { BehaviorSubject } from 'rxjs';
var AuthFirebaseService = /** @class */ (function () {
    function AuthFirebaseService(firebaseAuth) {
        this.firebaseAuth = firebaseAuth;
        this.loginError = new BehaviorSubject(null);
        this.sendLoginError = this.loginError.asObservable();
        this.user = firebaseAuth.authState;
    }
    AuthFirebaseService.prototype.signup = function (email, password) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Success!', value);
        })
            .catch(function (err) {
        });
    };
    AuthFirebaseService.prototype.login = function (email, password) {
        var _this = this;
        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(function (value) {
            console.log('Nice, it worked!');
            console.log(value);
            console.log(_this.firebaseAuth.auth.app);
        })
            .catch(function (err) {
            _this.loginError.next(err);
            console.log(_this.loginError.value);
            // console.log(this.loginError);
        });
    };
    AuthFirebaseService.prototype.logout = function () {
        this.firebaseAuth
            .auth
            .signOut();
    };
    AuthFirebaseService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFireAuth])
    ], AuthFirebaseService);
    return AuthFirebaseService;
}());
export { AuthFirebaseService };
//# sourceMappingURL=auth-firebase.service.js.map