import { Component, EventEmitter, Output } from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms'
import { IPersone } from 'src/app/core/interfaces/ipersone';
import { PersoneService } from 'src/app/core/services/persone.service';

@Component({
  selector: 'app-form-persona',
  templateUrl: './form-persona.component.html',
  styleUrls: ['./form-persona.component.scss'],
})
export class FormPersonaComponent {
  myForm: FormGroup;
  @Output() nuovaPersona = new EventEmitter();
  persona: IPersone = { id: 0, nome: '', cognome:'', imgUrl:'' };

  constructor(fb: FormBuilder, private personeService: PersoneService){
    this.myForm = fb.group({
      txtNome: [],
      txtCognome: []
    });
  }
  inviaForm() {
    console.log(this.myForm.value.txtNome);
    this.persona.nome=this.myForm.value.txtNome;
    this.persona.cognome=this.myForm.value.txtCognome;
    this.persona.imgUrl="assets/images/user.png";
    this.personeService.pushPersone(this.persona);
    //this.personeService.persone.push(this.persona);
    //this.persona.nome=this.myForm.value.txtNome;
    //this.persona.cognome=this.myForm.value.txtCognome;
    //this.persona.imgUrl="assets/images/user.png";
    this.nuovaPersona.emit();
  }
}
