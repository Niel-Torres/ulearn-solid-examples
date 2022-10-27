import { CuentaBancaria } from './../../interfaces/cuentas/cuenta-bancaria';
import { Injectable } from '@angular/core';
import { CuentaBancariaBasicaComponent } from './../../components/cuentas/cuentaBancariaBasica/cuenta-bancaria-basica/cuenta-bancaria-basica.component';
import { CuentaBancariaPremiumComponent } from './../../components/cuentas/cuentaBancariaPremium/cuenta-bancaria-premium/cuenta-bancaria-premium.component';


@Injectable({
  providedIn: 'root'
})
export class RetirosService {

  private MONTO_GASTO_ADMIN = 25.00
   

  constructor(
    private cuentaBancariaBasica: CuentaBancariaBasicaComponent,
    private cuentaBancariaPremium: CuentaBancariaPremiumComponent
  ) { }

  // Cargar gastos anuales
  cargarGastosAdministrativos(cuentas: []) {
    // Cargar gastos administrativos a todas las cuentas básicas y premium.
    this.cuentaBancariaBasica.retirar(this.MONTO_GASTO_ADMIN);
    this.cuentaBancariaPremium.retirar(this.MONTO_GASTO_ADMIN);

  }
}
