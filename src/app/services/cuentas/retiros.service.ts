import { CuentaLargoPlazoComponent } from './../../components/cuentas/cuentaLargoPlazo/cuenta-largo-plazo/cuenta-largo-plazo.component';
import { CuentaBancariaRetirable } from 'src/app/interfaces/cuentas/cuenta-bancaria-retirable';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RetirosService {

  private MONTO_GASTO_ADMIN = 25.00

  constructor() { }

  // Cargar gastos anuales
  cargarGastosAdministrativos(cuentas: Array<CuentaBancariaRetirable>) {
    cuentas.forEach(cuenta => {
        cuenta.retirar(this.MONTO_GASTO_ADMIN);
    });
    
    

  }
}
