import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProductosService {
  API_URL: string ="https://jsonplaceholder.typicode.com/todos"
  constructor(private httpCLient: HttpClient) { }
  getZereginak(): Observable<any> {
    return this.httpCLient.get(this.API_URL)
  }
}