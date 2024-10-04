import { Injectable } from '@angular/core';
import { Personaje } from './interfaces/dbz.interface';
import { PersonajesComponent } from './personajes/personajes.component';

@Injectable({
  providedIn: 'root'
})

export class MiservicioService {

  constructor() { 

  }

  Goku: Personaje = {
    nombre: 'Goku',
    poder: 10000
  }

  Krillin: Personaje = {
    nombre: 'Krillin',
    poder: 5000
  }

  Vegetta: Personaje = {
    nombre: 'Vegetta',
    poder: 8000
  }

  private _personajes: Personaje[] = [this.Krillin, this.Goku, this.Vegetta];

  get personajes(){
    return [...this._personajes]
  }
    
  agregarNuevoPersonaje(nuevo: Personaje){
    this._personajes.push(nuevo);
  }
}
  