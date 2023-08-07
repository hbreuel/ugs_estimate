import { Router, RouterModule } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ClienteServiceService } from '../../listar-clientes/cliente-service.service';
import { Cliente } from '../../listar-clientes/listar-clientes';

@Component({
  selector: 'app-formulario-pessoa-fisica',
  templateUrl: './formulario-pessoa-fisica.component.html',
  styleUrls: ['./formulario-pessoa-fisica.component.css']
})
export class FormularioPessoaFisicaComponent implements OnInit {

  cliente: Cliente = {
    nome: '',
    cpf: '',
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
    private router:Router) { }

  ngOnInit(): void {
  }

  cadastrarPessoaFisica() {
    this.service.cadastrarPessoaFisica(this.cliente).subscribe( () => {
      this.router.navigate(['/clientes'])
    })
   
  }

}
