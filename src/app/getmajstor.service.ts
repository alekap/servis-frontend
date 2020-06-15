import { Injectable } from "@angular/core";
import { HttpClient,HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable()
export class GetmajstorService {
  constructor(private http: HttpClient) {}

  fetchMajstor(id,type): Observable<any> {
  let urlSearchParams = new URLSearchParams();
    return this.http.get('https://cors-anywhere.herokuapp.com/http://178.221.149.5:8081/'+type+'/'+id
    )
  
    
  }
}