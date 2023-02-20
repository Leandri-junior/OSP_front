import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})


export class AppServices {
    urlApi = "http://localhost:8010/"
    constructor(
        private http: HttpClient,
    ) { };
    
    
    httpOptions = {
        headers: new HttpHeaders({ 
          
          
        })
      };
    login(dados:any) {
        return this.http.post<any>(this.urlApi + "login", dados)
    }

    getTodolist(){
        return this.http.get<any>(this.urlApi + "ajax/get_lista")
    }


    postDados(dados:any){
        return this.http.post<any>(this.urlApi + "ajax/salvar_dados", dados)
    }

}