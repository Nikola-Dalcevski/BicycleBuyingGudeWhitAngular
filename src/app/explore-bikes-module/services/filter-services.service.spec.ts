import { TestBed } from '@angular/core/testing';

import { FilterServicesService } from './filter-services.service';

describe('FilterServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilterServicesService = TestBed.get(FilterServicesService);
    expect(service).toBeTruthy();
  });
});
