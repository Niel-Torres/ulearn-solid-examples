import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string;
  password: string;

  constructor(
    private http: HttpClient
  ) { 
    this.email='';
    this.password='';
  }

  login(){
    const user = {email: this.email, password: this.password};
    this.loginService(user)
      .subscribe(data => {
        console.log(data);
      });
  }

  loginService(user: {}): Observable<any>{
    return this.http.post("http://request.in/api/login", user)
  }

  registerUser(){
    // Funcionality to create user
  }  


}
