import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dipendenti',
  templateUrl: './dipendenti.component.html',
  styleUrls: ['./dipendenti.component.scss']
})

export class DipendentiComponent  implements OnInit {

  constructor(private router: Router) { }

  cambiaRotta(url:string){
    this.router.navigateByUrl(url);
  }

  ngOnInit() {


  }
  
}
