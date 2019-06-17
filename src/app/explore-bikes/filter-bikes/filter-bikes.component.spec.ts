import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterBikesComponent } from './filter-bikes.component';

describe('FilterBikesComponent', () => {
  let component: FilterBikesComponent;
  let fixture: ComponentFixture<FilterBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
