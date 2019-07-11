import { TestBed } from '@angular/core/testing';
import { GetBikesService } from './get-bikes.service';
describe('GetBikesService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(GetBikesService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=get-bikes.service.spec.js.map