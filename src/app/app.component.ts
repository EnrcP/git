import { Component, EventEmitter, OnInit, Output, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersoneService } from './core/services/persone.service';
import { PaginaInizialeComponent } from './modules/home/pagina-iniziale/pagina-iniziale.component';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit{

  title = 'myApp';

  constructor(private router : Router, personeService: PersoneService){
   
  }
  cambiaRotta(url:string){
    this.router.navigateByUrl(url);
  }

   ngAfterViewInit(){  }

  ngOnInit(): void {}

}
