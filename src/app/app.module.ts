import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule} from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";

import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { CadastroProntuarioComponent } from './cadastro-prontuario/cadastro-prontuario.component';
import { PacientesComponent } from './pacientes/pacientes.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    CadastroComponent,
    PageNotFoundComponent,
    LoginComponent,
    CadastroProntuarioComponent,
    PacientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
  }
 }
