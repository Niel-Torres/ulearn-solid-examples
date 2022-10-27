import { Usuario } from './../../interfaces/users/usuario';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProveedoresDeLoginService {

  constructor() { }

  login_Google(user: Usuario) {
    // Hacer login vía Google
  }

  login_Facebook(user: Usuario) {
    // Hacer login vía Facebook
  }
}
