import { Injectable } from '@angular/core';
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from 'rxjs/operators';

@Injectable()
export class DeletevoziloService {

  constructor(private http: HttpClient) { }

    deleteDeo(sasija): Observable<any> {
    return this.http.delete('https://cors-anywhere.herokuapp.com/http://178.221.149.5:8081/api/vozilo/'+sasija
    )
  
    
  }

}