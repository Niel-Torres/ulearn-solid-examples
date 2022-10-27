import { TestBed } from '@angular/core/testing';

import { ProveedoresDeLoginService } from './proveedores-de-login.service';

describe('ProveedoresDeLoginService', () => {
  let service: ProveedoresDeLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProveedoresDeLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
