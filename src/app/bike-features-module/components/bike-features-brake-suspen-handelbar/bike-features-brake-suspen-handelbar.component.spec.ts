import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeFeaturesBrakeSuspenHandelbarComponent } from './bike-features-brake-suspen-handelbar.component';

describe('BikeFeaturesBrakeSuspenHandelbarComponent', () => {
  let component: BikeFeaturesBrakeSuspenHandelbarComponent;
  let fixture: ComponentFixture<BikeFeaturesBrakeSuspenHandelbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeFeaturesBrakeSuspenHandelbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeFeaturesBrakeSuspenHandelbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
