import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaBancariaPremiumComponent } from './cuenta-bancaria-premium.component';

describe('CuentaBancariaPremiumComponent', () => {
  let component: CuentaBancariaPremiumComponent;
  let fixture: ComponentFixture<CuentaBancariaPremiumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaBancariaPremiumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaBancariaPremiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
