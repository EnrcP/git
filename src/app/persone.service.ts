import { Injectable } from '@angular/core';
import { IPersone } from '../app/ipersone'

@Injectable({
  providedIn: 'root'
})
export class PersoneService {

  persone: IPersone[] = [
    {nome:"Enrico", cognome:"Povia", imgUrl:"assets/images/user.png"},
    {nome:"Francesco", cognome:"Divincenzo", imgUrl:"assets/images/user.png"}
  ]

  constructor() { }

  getPersone = (): IPersone[] => this.persone
  
  pushPersone(persona: IPersone) {

    this.persone.push(persona);

  }

}
