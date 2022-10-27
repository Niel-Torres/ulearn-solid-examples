import { CuentaLargoPlazoComponent } from './../../components/cuentas/cuentaLargoPlazo/cuenta-largo-plazo/cuenta-largo-plazo.component';
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
      // No cargar gastos administrativos a cuentas largo plazo
      if(cuentas !instanceof CuentaLargoPlazoComponent)
        cuenta.retirar(this.MONTO_GASTO_ADMIN);
    });
    
    

  }
}
