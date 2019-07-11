import { async, TestBed } from '@angular/core/testing';
import { SizeCalculatorComponent } from './size-calculator.component';
describe('SizeCalculatorComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [SizeCalculatorComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(SizeCalculatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=size-calculator.component.spec.js.map