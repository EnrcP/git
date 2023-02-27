import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaInizialeComponent } from './pagina-iniziale/pagina-iniziale.component';
import { CustomPipePipe } from 'src/app/shared/pipes/custom-pipe.pipe';
import { CoreModule } from 'src/app/core/core.module';
import { FormsModule } from '@angular/forms';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';
import { CardPersonaComponent } from './components/card-persona/card-persona.component';
import { RouterModule } from '@angular/router';
import { ListaPersoneComponent } from './pages/lista-persone/lista-persone.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { DipendenteComponent } from './components/dipendente/dipendente.component';


@NgModule({
  declarations: [
    PaginaInizialeComponent,
    CustomPipePipe,
    FormPersonaComponent,
    CardPersonaComponent,
    ListaPersoneComponent,
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
        path:'lista-persone',
        component: ListaPersoneComponent,
        children: [{

          path:'dipendente',
          component: DipendenteComponent,
        }]

      }
    ]),
  ]
})
export class HomeModule { }
