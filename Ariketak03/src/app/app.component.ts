import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DadoComponent } from "./dado/dado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DadoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent extends DadoComponent{
  title = 'Ariketak03';

  dados: DadoComponent[]= []
  
  emaitza: string="";

  constructor(){
    super()
    this.dados = [
    new DadoComponent(),
    new DadoComponent(),
    new DadoComponent()
  ];
    for(let i=0; i<this.dados.length;i++){
      this.dados[i].getRandomNumber()
    }
  }

  jaurti(){
    for(let i=0; i<this.dados.length;i++){
      this.dados[i].getRandomNumber()
    }

   if(this.dados[0]==this.dados[1] && this.dados[0]==this.dados[2]){
      this.emaitza="irabazi duzu!!!"
   }else{
    this.emaitza="ez duzu irabazi :("
   }
   
  }
}
