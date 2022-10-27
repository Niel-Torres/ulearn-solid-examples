import { Component } from '@angular/core';
import { Usuario } from 'src/app/interfaces/users/usuario';
import { ProveedoresDeLoginService } from 'src/app/services/login/proveedores-de-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  canal!: string;

  constructor(
    private proveedoresDeLoginService: ProveedoresDeLoginService
  ) { }

  login(){
    const user: Usuario = {email: this.email, password: this.password};

    switch(this.canal) {
      case "google":
        this.proveedoresDeLoginService.login_Google(user);
        break;
      case "facebook":
        this.proveedoresDeLoginService.login_Facebook(user);
        break      
    }
  }




}
