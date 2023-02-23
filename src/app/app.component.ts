import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPersone } from './ipersone';
import { PersoneService } from './persone.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [PersoneService]
})
export class AppComponent {

  title = 'myApp';
  data = new Date();
  visualizzaForm: boolean=false;
  elencoPersone: IPersone[]=this.personeService.getPersone();


  //persone: IPersone[] = [
  //  {nome:"Enrico", cognome:"Povia", imgUrl:"assets/images/user.png"},
  //  {nome:"Francesco", cognome:"Divincenzo", imgUrl:"assets/images/user.png"}
  // ]
  constructor(private personeService: PersoneService) {
  }

  ngOnInit() {}

  handleAccedi(persona: IPersone) {
    alert("Ciao "+ persona.nome+" "+persona.cognome+", hai effettuato l'accesso!"+this.data);
  }
  handleRegistrazione(persona: IPersone){
    this.visualizzaForm=false;
  }

}
