import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orcamento } from './orcamento';


@Injectable({
  providedIn: 'root'
})
export class OrcamentosService {

  private readonly API_orcamentos = "http://localhost:8080/orcamentos"
  private readonly API_novo_orcamentos = "http://localhost:8080/orcamentos/novo"

  constructor( private http: HttpClient) {  }

  listar(): Observable<Orcamento[]> {
    return this.http.get<Orcamento[]>(this.API_orcamentos)
  }


}
