import { Injectable } from '@angular/core';
import { Autoa } from './interfaces/dbzcar.interface'

@Injectable({
    providedIn: 'root'
  })

  
export class serbitzua {

    constructor() { 
    }
    
    Ferrari : Autoa = {
        modeloa: "ferrari",
        prezioa: 100000
    }

    Opel : Autoa = {
        modeloa: "opel clio",
        prezioa: 17000
    }

    Wolswagen : Autoa = {
        modeloa: "furgoneta Scooby Doo",
        prezioa: 40000
    }

    private _autoak: Autoa[] = [this.Ferrari, this.Opel, this.Wolswagen];

    get autoak(){
        return [...this._autoak]
      }

    agregarNuevoAuto(nuevo: Autoa){
        this._autoak.push(nuevo)
    }
  }
  