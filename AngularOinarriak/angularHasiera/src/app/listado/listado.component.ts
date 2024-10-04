import { Component, OnInit } from '@angular/core';

import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  standalone: true,
  imports: [HeroeComponent],
  templateUrl: './listado.component.html',
  styleUrl: './listado.component.css'
})

export class ListadoComponent implements OnInit{
  constructor() {
    console.log("Constructor");
  }
  ngOnInit(): void{
    console.log("ngOnInit");
  }
  heroes: string[] = ["Spiderman","Ironman","Hulk","Thor"];
  heroeBorrado: string ="";

  borrarHeroe(){
    this.heroeBorrado = this.heroes.shift() || '';
    console.log(this.heroeBorrado)
  }
}

