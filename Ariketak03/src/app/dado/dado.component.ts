import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dado',
  standalone: true,
  imports: [],
  templateUrl: './dado.component.html',
  styleUrl: './dado.component.css'
})
export class DadoComponent {

    @Input() res : number=0;

    getRandomNumber() {
    this.res = Math.floor(Math.random()*6)+1;
    console.log(this.res)
    }

}
