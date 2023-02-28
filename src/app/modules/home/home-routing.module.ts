import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DipendenteComponent } from '../dipendenti/components/dipendente/dipendente.component';
import { Router, RouterModule } from '@angular/router';
import { DipendentiComponent } from '../dipendenti/pages/dipendenti/dipendenti.component';
import { ListaDipendentiComponent } from '../dipendenti/components/lista-dipendenti/lista-dipendenti.component';
import { FormPersonaComponent } from '../dipendenti/components/form-persona/form-persona.component';
import { PaginaInizialeComponent } from './pages/pagina-iniziale/pagina-iniziale.component';
import { CustomPipePipe } from 'src/app/shared/pipes/custom-pipe.pipe';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path:'',
        component: PaginaInizialeComponent,
      }
  ]),

],
exports:[RouterModule]
})
export class HomeRoutingModule { }
