import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class GetpopravkeService {

   constructor(private http: HttpClient) { }
  fetchPopravke(jmbg,flag): Observable<any> {

    if (flag){

      return this.http.get('https://cors-anywhere.herokuapp.com/http://178.221.149.5:8081/api/popravkeuser/', {params:{'status':flag}}
    )

    }else{
    return this.http.get('https://cors-anywhere.herokuapp.com/http://178.221.149.5:8081/api/popravkeuser/', {params:{'jmbg':jmbg}}
    )
    }
    
  }
}