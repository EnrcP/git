import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  myForm: FormGroup;

  nomeUtente: string = "";
  pswUtente: string = "";

  constructor(fb: FormBuilder){
    this.myForm = fb.group({
      pswUtente: [],
      nameUtente: []
    });
  }

  verifica(){
    
    if(this.myForm.value.pswUtente == "Admin" && this.myForm.value.nameUtente == "Admin"){    
      return true;
    }else{
      return false;
    }
  }

}
