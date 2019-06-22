import { TestBed } from '@angular/core/testing';

import { GetBikesService } from './get-bikes.service';

describe('GetBikesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetBikesService = TestBed.get(GetBikesService);
    expect(service).toBeTruthy();
  });
});
