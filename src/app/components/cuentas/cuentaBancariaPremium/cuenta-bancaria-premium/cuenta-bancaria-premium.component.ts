import { Component } from '@angular/core';
import { CuentaBancaria } from 'src/app/interfaces/cuentas/cuenta-bancaria';

@Component({
  selector: 'app-cuenta-bancaria-premium',
  templateUrl: './cuenta-bancaria-premium.component.html',
  styleUrls: ['./cuenta-bancaria-premium.component.css']
})
export class CuentaBancariaPremiumComponent implements CuentaBancaria {
  
  private saldo: number = 0;
  private puntos: number = 0;

  constructor() { }

  depositar(monto: number) {
    this.saldo += monto;
    this.incrementarPuntos();
  }

  retirar(monto: number) {
    if(this.saldo < monto) {
      return false;
    } else {
      this.saldo -= monto;
      this.incrementarPuntos();
      return true;
    }
  }

  private incrementarPuntos(){
    this.puntos++;
  }

}
