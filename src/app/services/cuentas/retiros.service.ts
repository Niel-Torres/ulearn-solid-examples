import { CuentaBancaria } from './../../interfaces/cuentas/cuenta-bancaria';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetirosService {

  private MONTO_GASTO_ADMIN = 25.00

  constructor() { }

  // Cargar gastos anuales
  cargarGastosAdministrativos(cuentas: Array<CuentaBancaria>) {
    cuentas.forEach(cuenta => {
      // Cargar gastos administrativos.
      cuenta.retirar(this.MONTO_GASTO_ADMIN);
    });
    
    

  }
}
