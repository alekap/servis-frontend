import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class GetpopravkeService {

   constructor(private http: HttpClient) { }
  fetchPopravke(jmbg,flag,id): Observable<any> {

    if (flag){

      if(!id){
      return this.http.get('https://cors-anywhere.herokuapp.com/http://109.92.82.97:8081/api/popravkeuser/', {params:{'status':flag}}
      );}else{
        return this.http.get('https://cors-anywhere.herokuapp.com/http://109.92.82.97:8081/api/popravkeuser/', {params:{'status':flag,
        'id':id}}
      );
      }

    }else{
    return this.http.get('https://cors-anywhere.herokuapp.com/http://109.92.82.97:8081/api/popravkeuser/', {params:{'jmbg':jmbg}}
    )
    }
    
  }
}