import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './Guards/auth-guard.guard';
import { CadastroPacienteComponent } from './pages/cadastro-paciente/cadastro-paciente.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path:"",
    pathMatch:"full",
    redirectTo:"home"
  }
  ,
  {path:"login",component:LoginComponent},
  {path:'cadastrar',component:CadastroComponent },
  {path:'home',component:HomeComponent, canActivate:[AuthGuard]},
  { path:'cadastrar/paciente', component:CadastroPacienteComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
