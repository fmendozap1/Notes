import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreatenotesService {

  constructor(private http:HttpClient) {

   }

  insertnote(data:any){
    return this.http.post('http://127.0.0.1:300/apinotes/create',data);
  }
}
