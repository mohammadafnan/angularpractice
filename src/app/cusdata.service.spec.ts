import { TestBed } from '@angular/core/testing';

import { CusdataService } from './cusdata.service';

describe('CusdataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CusdataService = TestBed.get(CusdataService);
    expect(service).toBeTruthy();
  });
});
