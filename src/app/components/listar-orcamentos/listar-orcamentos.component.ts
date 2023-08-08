import { Component, OnInit } from '@angular/core';
import { OrcamentosService } from './orcamentos.service';
import { Orcamento } from './orcamento';

@Component({
  selector: 'app-listar-orcamentos',
  templateUrl: './listar-orcamentos.component.html',
  styleUrls: ['./listar-orcamentos.component.css']
})
export class ListarOrcamentosComponent implements OnInit {

  listaOrcamentos : Orcamento[] = []

  constructor(private service: OrcamentosService) { }

  ngOnInit(): void {
    this.service.listar().subscribe((listaOrcamentos) => {
      this.listaOrcamentos = listaOrcamentos
    })
  }

}
