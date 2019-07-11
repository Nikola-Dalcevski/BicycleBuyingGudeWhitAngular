import { async, TestBed } from '@angular/core/testing';
import { BikeFeaturesComponent } from './bike-features.component';
describe('BikeFeaturesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BikeFeaturesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BikeFeaturesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bike-features.component.spec.js.map