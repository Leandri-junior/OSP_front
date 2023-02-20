import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/login.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  constructor( private authService:AuthService){}
  logout(){
    this.authService.logout();
  }
}
