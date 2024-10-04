import { Component } from '@angular/core';

@Component({
  selector: 'app-heroe',
  standalone: true,
  imports: [],
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  nombre = "Ai Roman"
  edad = 777
  izenburua = "Heroe APP"

  cambiarNombre(){
    this.nombre = "Espaiderman"
  }

  cambiarEdad(){
    console.log("KEY!");
    this.edad = 30;
  }
}
