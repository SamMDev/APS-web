import { TestBed } from '@angular/core/testing';

import { LazyDataServiceService } from './lazy-data-service.service';

describe('LazyDataServiceService', () => {
  let service: LazyDataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LazyDataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
