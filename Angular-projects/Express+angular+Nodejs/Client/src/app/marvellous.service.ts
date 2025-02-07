import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MarvellousService {
//dependency injection of http
  constructor(private http : HttpClient)
   { }
   getBatches():Observable<any>
   {
    //It connects with Node_express server
    return this.http.get('http://localhost:5100/getbatches');
   }
}
