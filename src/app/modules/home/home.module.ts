import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { PaginaInizialeComponent } from './pages/pagina-iniziale/pagina-iniziale.component';
import { CoreModule } from 'src/app/core/core.module';



@NgModule({
  declarations: [
    PaginaInizialeComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
