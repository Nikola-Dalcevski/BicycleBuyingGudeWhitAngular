import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFavoritebikesComponent } from './user-favoritebikes.component';

describe('UserFavoritebikesComponent', () => {
  let component: UserFavoritebikesComponent;
  let fixture: ComponentFixture<UserFavoritebikesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserFavoritebikesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFavoritebikesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
