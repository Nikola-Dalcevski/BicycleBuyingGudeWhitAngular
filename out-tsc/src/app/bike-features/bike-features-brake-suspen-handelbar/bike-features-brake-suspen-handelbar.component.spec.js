import { async, TestBed } from '@angular/core/testing';
import { BikeFeaturesBrakeSuspenHandelbarComponent } from './bike-features-brake-suspen-handelbar.component';
describe('BikeFeaturesBrakeSuspenHandelbarComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [BikeFeaturesBrakeSuspenHandelbarComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(BikeFeaturesBrakeSuspenHandelbarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=bike-features-brake-suspen-handelbar.component.spec.js.map