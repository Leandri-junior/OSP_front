import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CadastroModel } from 'src/app/models/LoginModel';
import { AuthService } from 'src/app/Services/login.services';

import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {

  formulariocadastro= new FormGroup({
    nm_primeiro: new FormControl(''),
    nm_ultimo: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    repet_senha: new FormControl(''),
    
  })

  constructor( private http:HttpClient, private formbBuilder: FormBuilder, private authService:AuthService,
    private router:Router){ }

  ngOnInit(): void{
      this.formulariocadastro = this.formbBuilder.group(
        {
          nm_primeiro: ['',[Validators.required]],
          nm_ultimo: ['',[Validators.required]],
          email: ['',[Validators.required, Validators.email ]],
          senha: ['',[Validators.required]],
          repet_senha: ['',[Validators.required]],
        }
      );
      console.log('carregou')
  }
  submitCadastro(){
   
    
    var dadosCadastro = this.formulariocadastro.getRawValue() as CadastroModel;
    console.log(dadosCadastro)
    this.authService.cadastrar(dadosCadastro.nm_primeiro, dadosCadastro.nm_ultimo, dadosCadastro.email, dadosCadastro.senha).subscribe((response: any) => {
     
      console.log(response);
    });
  }
} 
