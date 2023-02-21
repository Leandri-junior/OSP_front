import { Component } from '@angular/core';
import { MenuHeaderComponent } from 'src/app/Components/Menu/menu-header/menu-header.component';
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
