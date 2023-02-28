import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProtezioneCanactivatechildGuard } from './core/guards/protezione-canactivatechild.guard';
import { ProtezioneResolveGuard } from './core/guards/protezione-resolve.guard';

@NgModule({

  imports: [
    RouterModule.forRoot([
    
    {
      path:'', 
      loadChildren: () => import('./modules/home/home.module').
      then(m => m.HomeModule)
    },
    {
      path:'dipendenti', 
      loadChildren: () => import('./modules/dipendenti/dipendenti.module').
      then(m => m.DipendentiModule),
      canActivateChild: [ProtezioneCanactivatechildGuard],
      resolve: [ProtezioneResolveGuard]
    },
    {
      path:'login', 
      loadChildren: () => import('./modules/login/login.module').
      then(m => m.LoginModule)
    },
  ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
