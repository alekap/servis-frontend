import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class GetugrdeoService {

  constructor(private http: HttpClient) { }
  fetchugrDeo(id): Observable<any> {
    return this.http.get('https://cors-anywhere.herokuapp.com/http://109.92.82.97:8081/api/ugradjenidelovipop',{params:{'id_popravke':id}}
    )
  
    
  }
}