import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente-tr',
  templateUrl: './cliente-tr.component.html',
  styleUrls: ['./cliente-tr.component.css']
})
export class ClienteTrComponent implements OnInit {

  cliente = {
    id: 1, 
    nome: "Henrique",
    cpf: "1231321",
    telefone: "999999-9999",
    razaoSocial: null,
    cnpj: null
  }

  constructor() { }

  ngOnInit(): void {
  }

}
