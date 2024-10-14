import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { gifsInter } from '../../interface/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifs: gifsInter[] = [];

  API_URL: string = "api.giphy.com/v1/gifs/search";
  constructor(private httpClient: HttpClient) {
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.gifs = JSON.parse(localStorage.getItem('gifs')!) || []
  }

  getGifs(): Observable<any> {
    return this.httpClient.get(this.API_URL);
  }


  private _historial: string[] = [];

  get historial() {
    // Los tres puntos son para romper la referencia con el historial original
    return [...this._historial];
  }



  buscarGifs(busqueda: string) {
    if (busqueda != '' && this.errepikatuta(busqueda) == false) {
      busqueda = busqueda.toLocaleLowerCase();
      busqueda.trim;
      this._historial.unshift(busqueda);

      if (this._historial.length > 10) {
        this._historial.pop()
      }

      localStorage.setItem('historial', JSON.stringify(this._historial))

    }
    
    this.httpClient.get<gifsInter>("https://api.giphy.com/v1/gifs/search?api_key=rPFNpcUea56u5edHjg6pM3gHioF19qry&q=" + busqueda + "&limit=15").subscribe(
      (data: any) => {
        console.log(data.data)
        this.gifs = data.data
        localStorage.setItem('resultados', JSON.stringify(this.gifs))
      }
    )
    console.log(this._historial);
  }

  errepikatuta(busqueda: string) {
    for (let i = 0; i < this._historial.length; i++) {
      busqueda = busqueda.toLocaleLowerCase();
      busqueda.trim;
      if (busqueda == this._historial[i]) {
        return true
      }
    }
    return false
  }

}
