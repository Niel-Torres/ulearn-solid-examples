import { UsuarioI } from './../../interfaces/users/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresDeLoginService {

  constructor() { }

  login_Google(user: UsuarioI) {
    // Hacer login vía Google
  }

  login_Facebook(user: UsuarioI) {
    // Hacer login vía Facebook
  }
}
