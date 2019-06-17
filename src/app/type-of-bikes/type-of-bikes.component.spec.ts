import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfBikesComponent } from './type-of-bikes.component';

describe('TypeOfBikesComponent', () => {
  let component: TypeOfBikesComponent;
  let fixture: ComponentFixture<TypeOfBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
