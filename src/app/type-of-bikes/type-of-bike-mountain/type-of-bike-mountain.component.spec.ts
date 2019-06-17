import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfBikeMountainComponent } from './type-of-bike-mountain.component';

describe('TypeOfBikeMountainComponent', () => {
  let component: TypeOfBikeMountainComponent;
  let fixture: ComponentFixture<TypeOfBikeMountainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfBikeMountainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfBikeMountainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
