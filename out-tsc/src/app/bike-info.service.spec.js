import { TestBed } from '@angular/core/testing';
import { BikeInfoService } from './bike-info.service';
describe('BikeInfoService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(BikeInfoService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=bike-info.service.spec.js.map