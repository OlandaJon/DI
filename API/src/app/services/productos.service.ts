import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  API_URL: string ="http://scratchya.com.ar/vue/datos.php"
  constructor(private httpCLient: HttpClient) { }
  getProducts(): Observable<any> {
    return this.httpCLient.get(this.API_URL)
  }
}
