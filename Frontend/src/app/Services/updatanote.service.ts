import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdatanoteService {

  constructor(private http:HttpClient) { }

  listnotes(){
    return this.http.get('http://127.0.0.1:300/apinotes/list')
  }

  actualizarnote(data: any): Observable<any> {
    return this.http.put(`http://127.0.0.1:300/apinotes/edit/${data.id}`,data);
  }

}
