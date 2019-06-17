import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreBikesComponent } from './explore-bikes.component';

describe('ExploreBikesComponent', () => {
  let component: ExploreBikesComponent;
  let fixture: ComponentFixture<ExploreBikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExploreBikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExploreBikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
