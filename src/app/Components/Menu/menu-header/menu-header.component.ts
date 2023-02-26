import { Component } from '@angular/core';
import { AuthService } from 'src/app/Services/login.services';

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent {
  constructor( private authService:AuthService){}
  logout(){
    this.authService.logout();
    
  }
}
