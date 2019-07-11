import { async, TestBed } from '@angular/core/testing';
import { TypeOfBikeRoadComponent } from './type-of-bike-road.component';
describe('TypeOfBikeRoadComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TypeOfBikeRoadComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TypeOfBikeRoadComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=type-of-bike-road.component.spec.js.map