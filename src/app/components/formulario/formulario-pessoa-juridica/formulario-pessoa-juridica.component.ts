import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../listar-clientes/listar-clientes';
import { ClienteServiceService } from '../../listar-clientes/cliente-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-pessoa-juridica',
  templateUrl: './formulario-pessoa-juridica.component.html',
  styleUrls: ['./formulario-pessoa-juridica.component.css']
})
export class FormularioPessoaJuridicaComponent implements OnInit {
  
  cliente: Cliente = {
    razaoSocial: '',
    nomeFantasia: '',
    cnpj: '',
    email: '',
    telefone: '',
    endereco: {
      cep: '',
      logradouro: '',
      numero: '',
      complemento: '',
      bairro: '',
      cidade: '',
      uf: '',
    }
  }
  
  constructor(private service: ClienteServiceService,
    private router: Router) { }
  
  ngOnInit(): void {

  }
  
  cadastrarPessoaJuridica() {
    this.service.cadastrarPessoaJuridica(this.cliente).subscribe( () => {
      this.router.navigate(['/clientes'])
    })
  }


  
}
