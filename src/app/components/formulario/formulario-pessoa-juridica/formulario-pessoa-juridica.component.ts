import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../listar-clientes/listar-clientes';
import { ClienteServiceService } from '../../listar-clientes/cliente-service.service';
import { Router } from '@angular/router';
import { ViaCepApiService } from '../../via-cep/via-cep-api.service';

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
    private router: Router, private serviceViaCep: ViaCepApiService) { }
  
  ngOnInit(): void {

  }
  
  cadastrarPessoaJuridica() {
    this.service.cadastrarPessoaJuridica(this.cliente).subscribe( () => {
      this.router.navigate(['/clientes'])
    })
  }

  getCep() {
    const clienteCep = this.cliente.endereco.cep;
  
    this.serviceViaCep.getCep(clienteCep).subscribe(
      (endereco: any) => { // Usando any como tipo genérico para o retorno JSON
        this.cliente.endereco = {
          cep: endereco.cep,
          logradouro: endereco.logradouro,
          complemento: endereco.complemento,
          bairro: endereco.bairro,
          cidade: endereco.localidade,
          uf: endereco.uf,
        
        };
      },
      (error) => {
        console.error('Erro ao obter o endereço:', error);
      }
    );
  }}
