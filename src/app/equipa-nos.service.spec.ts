import { TestBed } from '@angular/core/testing';

import { EquipaNosService } from './equipa-nos.service';

describe('EquipaNosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EquipaNosService = TestBed.get(EquipaNosService);
    expect(service).toBeTruthy();
  });
});
