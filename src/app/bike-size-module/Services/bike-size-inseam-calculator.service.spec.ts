import { TestBed } from '@angular/core/testing';

import { BikeSizeInseamCalculatorService } from './bike-size-inseam-calculator.service';

describe('BikeSizeInseamCalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BikeSizeInseamCalculatorService = TestBed.get(BikeSizeInseamCalculatorService);
    expect(service).toBeTruthy();
  });
});
