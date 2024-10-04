import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Articulo } from './Interface/Articulo.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Ariketak02';

  kodea: string = "";
  desc: string = "";
  prezioa: string = "";

  aukeratua: string = "";

  public articulos: Articulo[] = [{ kodea: "1", describapena: "Boligrafo gorria", prezioa: "3" }];

  public getArticulos() {
    return this.articulos;
  }

  gehitu() {

    console.log(this.kodea)

    if (this.kodea && this.desc && this.prezioa) {
      this.articulos.push({ kodea: this.kodea, describapena: this.desc, prezioa: this.prezioa });
      this.kodea = '';
      this.desc = '';
      this.prezioa = '';
    }
  }

 aldatu() {
    for (let i = 0; i < this.articulos.length; i++) {
      if (this.articulos[i].kodea === this.aukeratua) {
        this.articulos[i].kodea = this.kodea;
        this.articulos[i].describapena = this.desc;
        this.articulos[i].prezioa = this.prezioa;
        break; 
      }
    }
  }

  ezabatu(kodea: string) {

    for (let i = 0; i < this.articulos.length; i++) {
      if (kodea == this.articulos[i].kodea) {
        this.articulos.splice(i, 1);
      }
    }

  }

  aukeratu(kodea: string) {
    this.aukeratua = kodea;
  }

}
