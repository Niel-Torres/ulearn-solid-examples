import { Injectable } from '@angular/core';
import { UsuarioI } from './../../interfaces/users/usuario';
import { LoginBase } from './../../interfaces/login/login-base';
import { ProveedoresDeLoginService } from './proveedores-de-login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginFacebookService implements LoginBase{
  user!: UsuarioI

  constructor(
    private proveedoresDeLoginService: ProveedoresDeLoginService
  ) { }
  
  login() {
    this.proveedoresDeLoginService.login_Facebook(this.user);
  }
}
