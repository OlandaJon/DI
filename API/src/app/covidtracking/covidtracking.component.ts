import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { covid } from '../interface/covid.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-covidtracking',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './covidtracking.component.html',
  styleUrl: './covidtracking.component.css'
})

export class CovidtrackingComponent {
  covids: covid[] = [];
  constructor (private http: HttpClient){  }
  ngOnInit(): void {
   this.http.get<covid[]>("https://api.covidtracking.com/v1/us/daily.json").subscribe(
    resultado => {
      this.covids = resultado
      console.log(this.covids)
    }
   )
  }
}
