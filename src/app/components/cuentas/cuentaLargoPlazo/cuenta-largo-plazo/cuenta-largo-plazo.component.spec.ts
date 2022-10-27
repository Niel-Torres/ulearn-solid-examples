import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaLargoPlazoComponent } from './cuenta-largo-plazo.component';

describe('CuentaLargoPlazoComponent', () => {
  let component: CuentaLargoPlazoComponent;
  let fixture: ComponentFixture<CuentaLargoPlazoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentaLargoPlazoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CuentaLargoPlazoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
