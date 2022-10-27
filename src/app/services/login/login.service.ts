import { Injectable } from '@angular/core';
import { ProveedoresDeLoginService } from './proveedores-de-login.service';
import { UsuarioI } from 'src/app/interfaces/users/usuario';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  protected canal!: string;
  protected user!: UsuarioI;

  constructor(
   protected proveedoresDeLoginService: ProveedoresDeLoginService
  ) { }

  login() {
    switch(this.canal) {
      case "google":
        this.proveedoresDeLoginService.login_Google(this.user);
        break;
      case "facebook":
        this.proveedoresDeLoginService.login_Facebook(this.user);
        break      
    }
  }
}
