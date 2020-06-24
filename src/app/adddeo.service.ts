import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class AdddeoService {

  constructor(private http: HttpClient) { }

  
  addDeo(sifra,idpop): Observable<any> {
    return this.http.post('https://cors-anywhere.herokuapp.com/http://109.92.82.97:8081/api/ugradjenidelovi',JSON.stringify({
        sifra_dela: sifra,
        id_popravke: idpop
      })
    )}

}