import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfBikeRoadComponent } from './type-of-bike-road.component';

describe('TypeOfBikeRoadComponent', () => {
  let component: TypeOfBikeRoadComponent;
  let fixture: ComponentFixture<TypeOfBikeRoadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfBikeRoadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfBikeRoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
