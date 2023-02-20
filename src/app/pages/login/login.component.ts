import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/models/LoginModel';
import { AuthService } from 'src/app/Services/login.services';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  
})

export class LoginComponent {

  formulariologin= new FormGroup({
    matricula: new FormControl(''),
    senha: new FormControl(''),
    
  })

  constructor( private http:HttpClient, private formbBuilder: FormBuilder, private authService:AuthService,
    private router:Router){ }

  ngOnInit(): void{
      this.formulariologin = this.formbBuilder.group(
        {
          matricula: ['',[Validators.required]],
          senha: ['',[Validators.required]]
        }
      );
      console.log('carregou')
  }
  submitLogin(){
   
    
    var dadosLogin = this.formulariologin.getRawValue() as LoginModel;
    console.log(dadosLogin)
    this.authService.login(dadosLogin.matricula, dadosLogin.senha).subscribe((response: any) => {
     
      console.log(response);
    });
  }
} 
