import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInizialeComponent } from '../home/pages/pagina-iniziale/pagina-iniziale.component';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';
import { CardPersonaComponent } from './components/card-persona/card-persona.component';
import { RouterModule } from '@angular/router';
import { ListaDipendentiComponent } from './components/lista-dipendenti/lista-dipendenti.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DipendenteComponent } from './components/dipendente/dipendente.component';
import { DipendentiComponent } from './pages/dipendenti/dipendenti.component';
import { CustomPipePipe } from 'src/app/shared/pipes/custom-pipe.pipe';
import { DipendentiRoutingModule } from './dipendenti-routing.module';


@NgModule({
  declarations: [
    CustomPipePipe,
    CardPersonaComponent,
    FormPersonaComponent,
    ListaDipendentiComponent,
    DipendentiComponent,
    CardPersonaComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    DipendentiRoutingModule
  ]
})
export class DipendentiModule { }
