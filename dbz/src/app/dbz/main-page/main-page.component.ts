import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PersonajesComponent } from "../personajes/personajes.component";
import { Personaje } from '../interfaces/dbz.interface';
import { AgregarComponent } from "../agregar/agregar.component";
import { inject } from '@angular/core';
import { MiservicioService } from '../miservicio.service';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [FormsModule, CommonModule, PersonajesComponent, AgregarComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  //dbzService: MiservicioService=inject (MiservicioService);
  // personajes: Personaje[]

  constructor(){
  //  this.personajes = this.dbzService.personajes;
  }

  nuevo: Personaje={
    nombre: "Maestro Roshi",
    poder: 1000
  }

  //get personajes(){
    //return this.dbzService.personajes;
  //}

}
