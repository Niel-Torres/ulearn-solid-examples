import { Component } from '@angular/core';
import { LoginService } from 'src/app/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(
    private loginService: LoginService
  ) { 
    this.email='';
    this.password='';
  }

  login(){
   // this.loginService......
  }




}
