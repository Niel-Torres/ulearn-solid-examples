import { Injectable } from '@angular/core';
import { LoginBase } from './../../interfaces/login/login-base';
import { ProveedoresDeLoginService } from './proveedores-de-login.service';
import { UsuarioI } from './../../interfaces/users/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginGoogleService implements LoginBase{
  user!: UsuarioI

  constructor(
    private proveedoresDeLoginService: ProveedoresDeLoginService
  ) {
  }

  login() {
    this.proveedoresDeLoginService.login_Google(this.user);
  }

}
