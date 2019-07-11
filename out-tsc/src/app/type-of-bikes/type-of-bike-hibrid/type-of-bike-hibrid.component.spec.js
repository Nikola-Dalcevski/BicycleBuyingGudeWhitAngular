import { async, TestBed } from '@angular/core/testing';
import { TypeOfBikeHibridComponent } from './type-of-bike-hibrid.component';
describe('TypeOfBikeHibridComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [TypeOfBikeHibridComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(TypeOfBikeHibridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=type-of-bike-hibrid.component.spec.js.map