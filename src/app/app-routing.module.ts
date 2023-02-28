import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DipendenteComponent } from './modules/home/components/dipendente/dipendente.component';
import { FormPersonaComponent } from './modules/home/components/form-persona/form-persona.component';
import { ListaDipendentiComponent } from './modules/home/components/lista-dipendenti/lista-dipendenti.component';
import { DipendentiComponent } from './modules/home/pages/dipendenti/dipendenti.component';
import { PaginaInizialeComponent } from './modules/home/pages/pagina-iniziale/pagina-iniziale.component';

const routes: Routes = [
  {
    path:'',
    component: PaginaInizialeComponent
  },
  {
    path:'dipendenti',
    component: DipendentiComponent,
    children: [
      {
        path:'lista-dipendenti',
        component: ListaDipendentiComponent,
      },
      {
        path:'aggiungi-dipendente',
        component: FormPersonaComponent,
      },
      {
        path:'dipendente',
        component: DipendenteComponent,
      }
  ]

  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
