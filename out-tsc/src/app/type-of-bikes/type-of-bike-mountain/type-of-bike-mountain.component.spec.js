import { async, TestBed } from '@angular/core/testing';
import { TypeOfBikeMountainComponent } from './type-of-bike-mountain.component';
describe('TypeOfBikeMountainComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TypeOfBikeMountainComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TypeOfBikeMountainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=type-of-bike-mountain.component.spec.js.map