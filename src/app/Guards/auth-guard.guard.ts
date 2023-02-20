// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AuthService } from './auth.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuard implements CanActivate {

//   constructor(private authService: AuthService, private router: Router) {}

//   canActivate(): Observable<boolean> | boolean {
//     const token = localStorage.getItem('token');
//     const isAuthenticated = token != null;

//     // Define o estado de autenticação do usuário no serviço de autenticação
//     this.authService.setAuthenticated(isAuthenticated);

//     if (!isAuthenticated) {
//       // Se o usuário não estiver autenticado, redireciona para a página de login
//       this.router.navigate(['/login']);
//     }

//     return isAuthenticated;
//   }
// }

