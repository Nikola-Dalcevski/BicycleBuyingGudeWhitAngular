import { async, TestBed } from '@angular/core/testing';
import { BikeFeaturesWheelsizeGearsComponent } from './bike-features-wheelsize-gears.component';
describe('BikeFeaturesWheelsizeGearsComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BikeFeaturesWheelsizeGearsComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BikeFeaturesWheelsizeGearsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bike-features-wheelsize-gears.component.spec.js.map