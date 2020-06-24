import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class ZavrsipopService {

  constructor(private http: HttpClient) { }
   Zavrsipopravku(id_pop): Observable<any> {
    return this.http.post('https://cors-anywhere.herokuapp.com/http://109.92.82.97:8081/api/zavrsipopravku',JSON.stringify({
        id_popravke: id_pop
      })
    )
}
}