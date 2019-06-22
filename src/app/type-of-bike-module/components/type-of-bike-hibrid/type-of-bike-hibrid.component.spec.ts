import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfBikeHibridComponent } from './type-of-bike-hibrid.component';

describe('TypeOfBikeHibridComponent', () => {
  let component: TypeOfBikeHibridComponent;
  let fixture: ComponentFixture<TypeOfBikeHibridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeOfBikeHibridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfBikeHibridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
