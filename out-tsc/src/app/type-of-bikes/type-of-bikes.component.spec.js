import { async, TestBed } from '@angular/core/testing';
import { TypeOfBikesComponent } from './type-of-bikes.component';
describe('TypeOfBikesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TypeOfBikesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TypeOfBikesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=type-of-bikes.component.spec.js.map