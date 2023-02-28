import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({

  imports: [
    RouterModule.forRoot([
    {
      path:'dipendenti', loadChildren: () => import('./modules/dipendenti/dipendenti.module').
      then(m => m.DipendentiModule)
    },
    {
      path:'', loadChildren: () => import('./modules/home/home.module').
      then(m => m.HomeModule)}
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
