import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule, } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from './Services/login.services';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuGeralComponent } from './Components/Menu/menu-geral/menu-geral.component';
import { MenuLateralComponent } from './Components/Menu/menu-lateral/menu-lateral.component';
import { MenuBaixoComponent } from './Components/Menu/menu-baixo/menu-baixo.component';
import { MenuHeaderComponent } from './Components/Menu/menu-header/menu-header.component';
import { CadastroPacienteComponent } from './pages/cadastro-paciente/cadastro-paciente.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent,
    MenuGeralComponent,
    MenuLateralComponent,
    MenuBaixoComponent,
    MenuHeaderComponent,
    CadastroPacienteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
