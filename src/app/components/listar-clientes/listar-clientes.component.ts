import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from './listar-clientes';
import { ClienteServiceService } from './cliente-service.service';
import { ClienteTrComponent } from './cliente-tr/cliente-tr.component';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})
export class ListarClientesComponent implements OnInit {

  listaClientes : Cliente[] = []

  constructor(private service: ClienteServiceService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaClientes) => {
      this.listaClientes = listaClientes
    })
  }

  

}
