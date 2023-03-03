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
   
    get(url:any){
        return this.http.get<any>(this.urlApi + url)
    }


    post(url:any, dados:any){
        return this.http.post<any>(this.urlApi + url, dados)
    }

}