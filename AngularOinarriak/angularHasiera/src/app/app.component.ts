import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroeComponent, ListadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frogak';
  adina = 12;
  nombre = "Manolo";
  email = "manolo@gmail.com";
  sueldos =[1700,1800,1900];
  activo = "true";
  sitio = "http://www.google.com";

  esActivo(){
    if (this.activo){
      return "Trabajador activo"
    } else{
      return "Trabajador pasivo";
    }
  }

  ultimosTresSueldos(){
    let total=0;

   for(let i=0;i<this.sueldos.length;i++){
    total=total+this.sueldos[i];
   }
    return total;
  }

  public izenburua: string="Kontadore App";
  zenbakia: number = 10;

  gehitu(){
    this.zenbakia++;
  }
  kendu(){
    this.zenbakia--;
  }

  aldatu(zbk: number){
    this.zenbakia=this.zenbakia+zbk;
  }

  balioa: number = 8;


}



