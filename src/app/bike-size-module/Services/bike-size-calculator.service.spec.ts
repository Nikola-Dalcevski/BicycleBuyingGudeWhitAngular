import { TestBed } from '@angular/core/testing';

import { BikeSizeCalculatorService } from './bike-size-calculator.service';

describe('BikeSizeCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikeSizeCalculatorService = TestBed.get(BikeSizeCalculatorService);
    expect(service).toBeTruthy();
  });
});
