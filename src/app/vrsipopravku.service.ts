import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class VrsipopravkuService {

  constructor(private http: HttpClient) { }

   putVrsipopravku(id_m,id_pop): Observable<any> {
    return this.http.post('https://cors-anywhere.herokuapp.com/http://109.92.82.97:8081/api/zapocnipopravku',JSON.stringify({
        id_majstora: id_m,
        id_popravke: id_pop
      })
    )
}

}