import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable()
export class PutvoziloService {

   constructor(private http: HttpClient) {}

  putVozilo(sasija,model,reg,god,klima,jmbg): Observable<any> {
    return this.http.post('https://cors-anywhere.herokuapp.com/http://178.221.149.5:8081/vozilo',JSON.stringify({
        reg_br: reg,
        broj_sasije: sasija,
        godiste: god,
        klima: klima,
        id_model: model,
        jmbg: jmbg
      })
    )
}
}