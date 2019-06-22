import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeFeaturesWheelsizeGearsComponent } from './bike-features-wheelsize-gears.component';

describe('BikeFeaturesWheelsizeGearsComponent', () => {
  let component: BikeFeaturesWheelsizeGearsComponent;
  let fixture: ComponentFixture<BikeFeaturesWheelsizeGearsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeFeaturesWheelsizeGearsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeFeaturesWheelsizeGearsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
