import { TestBed } from '@angular/core/testing';

import { DiscountcodeService } from './discountcode.service';

describe('DiscountcodeService', () => {
  let service: DiscountcodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DiscountcodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
