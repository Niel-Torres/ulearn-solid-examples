import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

   doLoginHttp(user: {}): Observable<any>{
    return this.http.post("http://request.in/api/login", user)
  }
}
