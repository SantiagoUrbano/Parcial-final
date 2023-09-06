import { TestBed } from '@angular/core/testing';

import { CulturasService } from './culturas.service';

describe('CulturasService', () => {
  let service: CulturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CulturasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
