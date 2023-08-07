
import { HttpClient } from '@angular/common/http';
import { Cliente } from './listar-clientes';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ClienteServiceService {

  private readonly API_clientes = "http://localhost:8080/clientes"
  private readonly API_cadastraPessoaFisica = "http://localhost:8080/clientes/cadastraPessoaFisica"
  private readonly API_cadastraPessoaJuridica = "http://localhost:8080/clientes/cadastraPessoaJuridica"

  constructor( private http: HttpClient) {

   }
  
  

   listar(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(this.API_clientes)
   }

   cadastrarPessoaFisica(cliente : Cliente) {
    return this.http.post<Cliente>(this.API_cadastraPessoaFisica, cliente)
   }
   
   cadastrarPessoaJuridica(cliente : Cliente) {
    return this.http.post<Cliente>(this.API_cadastraPessoaJuridica, cliente)
   }
   

}
