import { TestBed } from '@angular/core/testing';
import { AuthFirebaseService } from './auth-firebase.service';
describe('AuthFirebaseService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(AuthFirebaseService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=auth-firebase.service.spec.js.map