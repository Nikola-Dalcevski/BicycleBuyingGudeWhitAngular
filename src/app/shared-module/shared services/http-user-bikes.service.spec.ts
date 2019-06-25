import { TestBed } from '@angular/core/testing';

import { HttpUserBikesService } from './http-user-bikes.service';

describe('HttpUserBikesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HttpUserBikesService = TestBed.get(HttpUserBikesService);
    expect(service).toBeTruthy();
  });
});
