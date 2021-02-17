import { TestBed } from '@angular/core/testing';

import { LigaNosService } from './liga-nos.service';

describe('LigaNosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LigaNosService = TestBed.get(LigaNosService);
    expect(service).toBeTruthy();
  });
});
