import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { zeregina } from '../interfaces/Welcome';

@Component({
  selector: 'app-zereginak',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './zereginak.component.html',
  styleUrl: './zereginak.component.css'
})
export class ZereginakComponent {
  zereginak : zeregina[] = [];
  constructor (private http: HttpClient){  }
  ngOnInit(): void {
   this.http.get<zeregina[]>("https://jsonplaceholder.typicode.com/todos").subscribe(
    resultado => {
      this.zereginak = resultado
      console.log(this.zereginak)
    }
   )
  }
}
