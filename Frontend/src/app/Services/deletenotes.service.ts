import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeletenotesService {

  constructor(private http:HttpClient) { 

  }

  listnotes(){
    return this.http.get('http://127.0.0.1:300/apinotes/list')
  }

}
