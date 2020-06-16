import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class PutpopravkaService {

  constructor(private http: HttpClient) { }
 putPopravku(sasija,rm,opis): Observable<any> {
    return this.http.post('https://cors-anywhere.herokuapp.com/http://178.221.149.5:8081/api/popravke',JSON.stringify({
        broj_sasije: sasija,
        sifra_rm: rm,
        opis: opis
      })
    )
}
}