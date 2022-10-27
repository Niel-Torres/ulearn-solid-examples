import { Component } from '@angular/core';
import { CuentaBancaria } from 'src/app/interfaces/cuentas/cuenta-bancaria';

@Component({
  selector: 'app-cuenta-largo-plazo',
  templateUrl: './cuenta-largo-plazo.component.html',
  styleUrls: ['./cuenta-largo-plazo.component.css']
})
export class CuentaLargoPlazoComponent implements CuentaBancaria{

  private saldo: number = 0;

  constructor() { }

  depositar(monto: number) {
    this.saldo += monto;
  }

}
