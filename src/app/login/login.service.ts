import { Injectable } from "@angular/core";
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class LoginService {
  constructor(private http: HttpClient) {}

  auth(user,pass,type): Observable<any> {
  let urlSearchParams = new URLSearchParams();
urlSearchParams.append('username', user);
urlSearchParams.append('password', pass);
    return this.http.post('https://cors-anywhere.herokuapp.com/http://178.221.149.5:8081/login'+type,JSON.stringify({
        username: user,
        password: pass,
      })
    )
  
    
  }
}
