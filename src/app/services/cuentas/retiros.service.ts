import { CuentaBancaria } from './../../interfaces/cuentas/cuenta-bancaria';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetirosService {

  private MONTO_GASTO_ADMIN = 25.00

  constructor() { }

  cargarGastosAdministrativos(cuentas: []) {
    // Cargar gastos administrativos. Descontar MONTO_GASTO_ADMIN a todas las cuentas básicas y premium.
  }
}
