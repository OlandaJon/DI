import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { inject } from '@angular/core';
import { MiservicioService } from '../miservicio.service';

@Component({
  selector: 'app-personajes',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent {
  dbzService: MiservicioService=inject (MiservicioService);

  //@Input() personajes: Personaje[] = []; 

  get personajes(){
    return this.dbzService.personajes;
  }
}
