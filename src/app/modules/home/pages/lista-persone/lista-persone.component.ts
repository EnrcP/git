import { Component, OnInit } from '@angular/core';
import { IPersone } from 'src/app/core/interfaces/ipersone';
import { PersoneService } from 'src/app/core/services/persone.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-persone',
  templateUrl: './lista-persone.component.html',
  styleUrls: ['./lista-persone.component.scss']
})
export class ListaPersoneComponent implements OnInit {
  data = new Date();
  visualizzaForm: boolean=false;
  elencoPersone: IPersone[] = [];

  constructor(private personeService: PersoneService, private http: HttpClient,
    private router: Router) {}

  ngOnInit() {

    this.http.get('http://demo0664697.mockable.io/api/v1/users').subscribe(data => {

    this.personeService.persone = Object.values(data).map((persona)=>{
        return persona;
      });

      this.elencoPersone = this.personeService.getPersone();

    });

  }

  handleAccedi(persona: IPersone) {
    alert("Ciao "+ persona.nome+" "+persona.cognome+", hai effettuato l'accesso!"+this.data);
  }
  handleRegistrazione(){
    this.visualizzaForm=false;
  }
  mostraDipendente(url:string){
      this.router.navigateByUrl(url);
  }
}
