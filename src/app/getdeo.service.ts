import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class GetdeoService {

  constructor(private http: HttpClient) { }
  fetchDeo(param): Observable<any> {
    return this.http.get('https://cors-anywhere.herokuapp.com/http://178.221.149.5:8081/deosearch',{params:{'param':param}}
    )
  
    
  }

}