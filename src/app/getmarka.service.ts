import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class GetmarkaService {

  constructor(private http: HttpClient) { }
  fetchMarka(): Observable<any> {
    return this.http.get('https://cors-anywhere.herokuapp.com/http://178.221.149.5:8081/api/markavozila'
    )
  
    
  }
}