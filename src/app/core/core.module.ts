import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MocksComponent } from './mocks/mocks.component';
import { InterceptorsComponent } from './interceptors/interceptors.component';
import { HttpComponent } from './http/http.component';
import { AuthenticationComponent } from './authentication/authentication.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    MocksComponent,
    InterceptorsComponent,
    HttpComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ]
})
export class CoreModule { }
