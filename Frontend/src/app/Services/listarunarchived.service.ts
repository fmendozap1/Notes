import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListarunarchivedService {

  constructor(private http:HttpClient) 
  {

  }

  listnotesunarchived(){
    return this.http.get('http://127.0.0.1:300/apinotes/listunarchive')
  }
}
