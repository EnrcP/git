import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPersone } from './ipersone';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'myApp';

  persone: IPersone[] = [
    {nome:"Enrico", cognome:"Povia", imgUrl:"assets/images/user.png"},
    {nome:"Francesco", cognome:"Divincenzo", imgUrl:"assets/images/user.png"}
  ]
  constructor() {}

  ngOnInit() {}

  handleAccedi(persona: IPersone) {
    alert("Ciao "+ persona.nome+" "+persona.cognome+", hai effettuato l'accesso!");
  }

}
