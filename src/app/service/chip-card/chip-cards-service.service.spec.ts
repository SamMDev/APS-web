import { TestBed } from '@angular/core/testing';

import { ChipCardsService } from './chip-cards.service';

describe('ChipCardsServiceService', () => {
  let service: ChipCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChipCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
