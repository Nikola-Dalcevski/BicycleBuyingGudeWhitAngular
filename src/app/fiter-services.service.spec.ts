import { TestBed } from '@angular/core/testing';

import { FiterServicesService } from './fiter-services.service';

describe('FiterServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FiterServicesService = TestBed.get(FiterServicesService);
    expect(service).toBeTruthy();
  });
});
