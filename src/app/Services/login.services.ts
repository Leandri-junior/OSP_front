import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
// const httpOptions = {
//     headers: new HttpHeaders({
//       'Content-Type':  'application/json',
//       'Access-Control-Allow-Origin': '*',
      
//     })
//   };

@Injectable()
export class AuthService {
  private loginUrl = 'http://127.0.0.1:8010/login';
  router: Router;
  constructor(private http: HttpClient , router: Router ) {this.router = router;}

  login(username: string, password: string): Observable<boolean> {
    return this.http.post<any>(this.loginUrl, { username: username, password: password })
      .pipe(
        map(response => {
          const token = response.token;
          if (token) {
            localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
            this.router.navigate(['home']);
            return true;

          } else {
            return false;
          }
        })
      );
  }
  private cadastroUrl = 'http://127.0.0.1:8010/cadastrar';
  

  cadastrar(nm_primeiro: string, nm_ultimo:string, email:string , password: string): Observable<any> {
    return this.http.post<any>(this.cadastroUrl, { nm_primeiro: nm_primeiro, password: password, nm_ultimo:nm_ultimo, email:email }).pipe(
      map(response => {console.log(response)}))
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }


  isLoggedIn(): boolean {
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return currentUser && currentUser.token;
  }
}

