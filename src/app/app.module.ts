import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterUsersComponent } from './components/register-users/register-users.component';
import { CuentaBancariaBasicaComponent } from './components/cuentas/cuentaBancariaBasica/cuenta-bancaria-basica/cuenta-bancaria-basica.component';
import { CuentaBancariaPremiumComponent } from './components/cuentas/cuentaBancariaPremium/cuenta-bancaria-premium/cuenta-bancaria-premium.component';
import { CuentaLargoPlazoComponent } from './components/cuentas/cuentaLargoPlazo/cuenta-largo-plazo/cuenta-largo-plazo.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterUsersComponent,
    CuentaBancariaBasicaComponent,
    CuentaBancariaPremiumComponent,
    CuentaLargoPlazoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
