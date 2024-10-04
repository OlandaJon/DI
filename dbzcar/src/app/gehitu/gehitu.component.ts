import { Component, inject, Input } from '@angular/core';
import { serbitzua } from '../serbitzua.service';
import { Autoa } from '../interfaces/dbzcar.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gehitu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gehitu.component.html',
  styleUrl: './gehitu.component.css'
})
export class GehituComponent {
  
  dbzService: serbitzua =inject(serbitzua)
  
  @Input() nuevo: Autoa = {
    modeloa:'',
    prezioa: 0
  }

  gehitu() {
    if (this.nuevo.modeloa.trim().length < 0 && this.nuevo.prezioa < 0) {
      return;
    }

   
    this.dbzService.agregarNuevoAuto(this.nuevo);
    this.nuevo = {"modeloa": "", "prezioa": 0}
 }
}
