import { Component, inject, input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { serbitzua } from '../serbitzua.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-bistaratu',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './bistaratu.component.html',
  styleUrl: './bistaratu.component.css'
})

export class bistaratu {
  dbzService: serbitzua=inject (serbitzua); 

  get autoak(){
    return this.dbzService.autoak;
  }
}
