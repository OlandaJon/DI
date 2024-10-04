import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  API_URL: string ="https://api.covidtracking.com/v1/us/daily.json"
  constructor(private httpCLient: HttpClient) { }
  getCovid(): Observable<any> {
    return this.httpCLient.get(this.API_URL)
  }
}