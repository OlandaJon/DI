import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CovidtrackingComponent } from "./covidtracking/covidtracking.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, CovidtrackingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  articulos: any;
  constructor (private http: HttpClient){  }
  ngOnInit(): void {
   this.http.get("http://scratchya.com.ar/vue/datos.php").subscribe(
    resultado => {
      this.articulos = resultado
      console.log(this.articulos)
    }
   )
  }
  title = 'API';
}
