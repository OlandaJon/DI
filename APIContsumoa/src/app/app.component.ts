import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ZereginakComponent } from "./zereginak/zereginak.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ZereginakComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'APIContsumoa';
}
