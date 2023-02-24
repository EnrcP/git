import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPersone } from '../ipersone';


@Component({
  selector: 'app-card-persona',
  templateUrl: './card-persona.component.html',
  styleUrls: ['./card-persona.component.scss']
})
export class CardPersonaComponent implements OnInit{

  @Input() persona: IPersone = { id: 0, nome : '', cognome:'', imgUrl:'' };
  @Output() nomePersona = new EventEmitter();

  constructor() {}

  accedi(){
    this.nomePersona.emit(this.persona)
  }

  ngOnInit() {}

}
