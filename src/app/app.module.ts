import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardPersonaComponent } from './card-persona/card-persona.component';
import { CustomPipePipe } from './custom-pipe.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormPersonaComponent } from './form-persona/form-persona.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListaPersoneComponent } from './lista-persone/lista-persone.component';

@NgModule({
  declarations: [
    AppComponent,
    CardPersonaComponent,
    CustomPipePipe,
    FormPersonaComponent,
    HomeComponent,
    ListaPersoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'',
        component: HomeComponent
      },
      {
        path:'lista-persone',
        component: ListaPersoneComponent
      }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
