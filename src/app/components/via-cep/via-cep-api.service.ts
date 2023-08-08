import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViaCepApiService {

  urlAPI: string = "https://viacep.com.br/ws/01001000/json/viacep.com.br/ws/"

  constructor(private http: HttpClient) { }

  getCep(cep:any){
    return this.http.get<JSON>(this.urlAPI + cep + "/json")
  } 


}
