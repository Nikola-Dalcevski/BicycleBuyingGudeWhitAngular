import { async, TestBed } from '@angular/core/testing';
import { ExploreBikesComponent } from './explore-bikes.component';
describe('ExploreBikesComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ExploreBikesComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ExploreBikesComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=explore-bikes.component.spec.js.map