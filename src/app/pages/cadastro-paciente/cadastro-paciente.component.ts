import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { PacienteModel } from 'src/app/models/PacienteModel';
import { AppServices } from 'src/app/Services/app.services';

@Component({
  selector: 'app-cadastro-paciente',
  templateUrl: './cadastro-paciente.component.html',
  styleUrls: ['./cadastro-paciente.component.scss']
})
export class CadastroPacienteComponent {

  cadastroPaciente= new FormGroup({
    nome: new FormControl(''),
    sobrenome: new FormControl(''),
    genero: new FormControl(''),
    cpf: new FormControl(''),
    rg: new FormControl(''),
    dt_nascimento: new FormControl(''),
    local: new FormControl(''),
    naturalidade: new FormControl(''),
    nome_mae: new FormControl(''),
    nome_pai: new FormControl(''),
    cep: new FormControl(''),
    rua: new FormControl(''),
    numero: new FormControl(''),
    complemento: new FormControl(''),
    bairro: new FormControl(''),
    cidade: new FormControl(''),
    estado: new FormControl(''),
    
  })
    constructor(private formbBuilder: FormBuilder, private appService:AppServices, private router:Router){ }

    submitPaciente(){
   
    
      var dadosCadastro = this.cadastroPaciente.getRawValue() as PacienteModel;
      console.log(dadosCadastro)
      this.appService.post("cliente/cadastrar", dadosCadastro).subscribe((response: any) => {
       
        console.log(response);
      });
    }

}
