import { Component } from '@angular/core';
import { GifsService } from '../service/gifs.service';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-resultados',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './resultados.component.html',
  styleUrl: './resultados.component.css'
})
export class ResultadosComponent {
  constructor(private gifService: GifsService){

  }

  get gifs(){
    return this.gifService.gifs;
  }
}
