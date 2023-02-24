import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PersoneService } from './persone.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit{

  title = 'myApp';

  cambiaRotta(url:string){
    this.router.navigateByUrl(url);
  }

  constructor(private router : Router, private personeService: PersoneService){}

  ngOnInit(): void {
    
    
    
  } 

}
