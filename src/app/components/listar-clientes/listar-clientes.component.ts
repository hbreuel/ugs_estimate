import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from './listar-clientes';
import { ClienteServiceService } from './cliente-service.service';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { DialogExclusaoComponent } from '../dialog/dialog-exclusao/dialog-exclusao.component';


@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css'],

})
export class ListarClientesComponent implements OnInit {

  listaClientes : Cliente[] = []

  constructor(private service: ClienteServiceService, 
    public dialog: MatDialog) { }


  ngOnInit(): void {
    this.service.listar().subscribe((listaClientes) => {
      this.listaClientes = listaClientes
    })
  }


}

  

  

