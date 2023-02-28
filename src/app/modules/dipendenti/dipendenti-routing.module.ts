import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ListaDipendentiComponent } from './components/lista-dipendenti/lista-dipendenti.component';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';
import { DipendenteComponent } from './components/dipendente/dipendente.component';
import { DipendentiComponent } from './pages/dipendenti/dipendenti.component';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
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
      }])
],
exports: [RouterModule]
})
export class DipendentiRoutingModule { }
