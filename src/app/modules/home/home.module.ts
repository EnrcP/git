import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInizialeComponent } from './pages/pagina-iniziale/pagina-iniziale.component';
import { CustomPipePipe } from 'src/app/shared/pipes/custom-pipe.pipe';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';
import { CardPersonaComponent } from './components/card-persona/card-persona.component';
import { RouterModule } from '@angular/router';
import { ListaDipendentiComponent } from './components/lista-dipendenti/lista-dipendenti.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DipendenteComponent } from './components/dipendente/dipendente.component';
import { DipendentiComponent } from './pages/dipendenti/dipendenti.component';


@NgModule({
  declarations: [
    PaginaInizialeComponent,
    CustomPipePipe,
    FormPersonaComponent,
    CardPersonaComponent,
    DipendentiComponent,
    ListaDipendentiComponent,
    DipendenteComponent,
  ],
  imports: [
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
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
    ]),
  ]
})
export class HomeModule { }
