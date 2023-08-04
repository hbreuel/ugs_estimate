import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { ListarOrcamentosComponent } from './components/listar-orcamentos/listar-orcamentos.component';
import { FormularioClienteComponent } from './components/formulario/formulario-cliente/formulario-cliente.component';
import { FormularioOrcamentoComponent } from './components/formulario/formulario-orcamento/formulario-orcamento.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'orcamentos',
    pathMatch: 'full'
  }
  ,
  {
    path: 'clientes',
    component: ListarClientesComponent
  },
  {
    path: 'orcamentos',
    component: ListarOrcamentosComponent
  },
  {
    path: "cadastraCliente",
    component: FormularioClienteComponent
  },
  {
    path: "gerarOrcamento",
    component: FormularioOrcamentoComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
