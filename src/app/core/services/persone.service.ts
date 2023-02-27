import { Injectable, OnInit } from '@angular/core';
import { IPersone } from '../interfaces/ipersone';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';


@Injectable({
  providedIn: 'root'
})
export class PersoneService{

  persone: IPersone[] = [];

  constructor(private http: HttpClient) { }

  getPersone = (): IPersone[] => this.persone;

  pushPersone(persona: IPersone) {

    this.persone.push(persona);
  }
}
