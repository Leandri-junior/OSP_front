
// import { HttpHeaders } from '@angular/common/http';
// import { TokenService } from './token.service';
// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class HeaderService {
//   private readonly API = `${'http://localhost:3000/'}`;

//   private headers: HttpHeaders;

//   acesso: string;

//   constructor(private tokenService: TokenService) {
//   }

//   getHeader(): any {
//     if (this.tokenService.getToken()) {
//       this.acesso = `Bearer ${this.tokenService.getToken().access}`;
//     }
//     this.headers = new HttpHeaders({
//       Accept: 'application/json',
//       Authorization: this.acesso,
//     });
//     return this.headers;
//   }

//   uuidv4() {
//     return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
//       const r = (Math.random() * 16) | 0,
//         v = c === 'x' ? r : (r & 0x3) | 0x8;
//       return v.toString(16);
//     });
//   }
// }
