import { Component } from '@angular/core';
import { IPersone } from '../ipersone';
import { PersoneService } from '../persone.service';

@Component({
  selector: 'app-lista-persone',
  templateUrl: './lista-persone.component.html',
  styleUrls: ['./lista-persone.component.scss'],
  providers: [PersoneService]
})
export class ListaPersoneComponent {
  data = new Date();
  visualizzaForm: boolean=false;
  elencoPersone: IPersone[]=this.personeService.getPersone();

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
