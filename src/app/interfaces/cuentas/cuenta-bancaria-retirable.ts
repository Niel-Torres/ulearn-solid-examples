import { CuentaBancaria } from 'src/app/interfaces/cuentas/cuenta-bancaria';

export interface CuentaBancariaRetirable extends CuentaBancaria{
    retirar(monto: number): void;
}
