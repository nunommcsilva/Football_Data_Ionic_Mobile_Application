import { TestBed } from '@angular/core/testing';

import { LigaChampionsService } from './liga-champions.service';

describe('LigaChampionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LigaChampionsService = TestBed.get(LigaChampionsService);
    expect(service).toBeTruthy();
  });
});
