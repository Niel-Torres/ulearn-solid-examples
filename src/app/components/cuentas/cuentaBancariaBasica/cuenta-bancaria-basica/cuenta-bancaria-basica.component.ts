import { Component } from '@angular/core';
import { CuentaBancariaRetirable } from 'src/app/interfaces/cuentas/cuenta-bancaria-retirable';
@Component({
  selector: 'app-cuenta-bancaria-basica',
  templateUrl: './cuenta-bancaria-basica.component.html',
  styleUrls: ['./cuenta-bancaria-basica.component.css']
})
export class CuentaBancariaBasicaComponent implements CuentaBancariaRetirable {

  private saldo: number = 0;

  constructor() { }

  depositar(monto: number) {
    this.saldo += monto;
  }

  retirar(monto: number) {
      if(this.saldo < monto) {
        return false;
      } else {
        this.saldo -= monto;
        return true;
      }
  }

}
