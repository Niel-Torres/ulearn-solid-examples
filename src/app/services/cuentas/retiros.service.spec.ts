import { TestBed } from '@angular/core/testing';

import { RetirosService } from './retiros.service';

describe('RetirosService', () => {
  let service: RetirosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RetirosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
