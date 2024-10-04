import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GehituComponent } from "./gehitu/gehitu.component";
import { bistaratu } from './bistaratu/bistaratu.component';
import { Autoa } from './interfaces/dbzcar.interface';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GehituComponent, bistaratu ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'dbzcar';
  
  nuevo: Autoa = {
  modeloa: "",
  prezioa:0
  }
}
