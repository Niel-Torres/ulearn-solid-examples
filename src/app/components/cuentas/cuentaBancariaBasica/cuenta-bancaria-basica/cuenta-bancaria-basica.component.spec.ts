import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaBancariaBasicaComponent } from './cuenta-bancaria-basica.component';

describe('CuentaBancariaBasicaComponent', () => {
  let component: CuentaBancariaBasicaComponent;
  let fixture: ComponentFixture<CuentaBancariaBasicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaBancariaBasicaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaBancariaBasicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
