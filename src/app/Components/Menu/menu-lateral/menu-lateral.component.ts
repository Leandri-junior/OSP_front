import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})

export class MenuLateralComponent {



  data: Array<any>;constructor(private router: Router){  
    this.data = [
      {
        rota: 'home/',
        nome: 'Dashboard',
        imagem: 'assets/media/logo.png',
        icon_down: 'assets/media/icons/flexa_esquerda.svg',
      },
      {
      rota: 'paciente/cadastrar',
      nome: 'Paciente',
      imagem: 'assets/media/logo.png',
      icon_down: 'assets/media/icons/flexa_esquerda.svg',
      },
      {
        rota: '',
        nome: 'Sem Rota',
        imagem: 'assets/media/logo.png',
        icon_down: 'assets/media/icons/flexa_esquerda.svg',
      },
  ]  
  }
  linkbutton(rota:any){
      if (rota){
        return this.router.navigate([rota]);
      }else{
        return true
      }
  }

      
}
          
