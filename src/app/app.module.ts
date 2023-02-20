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


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
