import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { ListarClientesComponent } from './components/listar-clientes/listar-clientes.component';
import { ListarOrcamentosComponent } from './components/listar-orcamentos/listar-orcamentos.component';
import { FormularioClienteComponent } from './components/formulario/formulario-cliente/formulario-cliente.component';
import { FormularioPessoaFisicaComponent } from './components/formulario/formulario-pessoa-fisica/formulario-pessoa-fisica.component';
import { FormularioPessoaJuridicaComponent } from './components/formulario/formulario-pessoa-juridica/formulario-pessoa-juridica.component';
import { FormularioOrcamentoComponent } from './components/formulario/formulario-orcamento/formulario-orcamento.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    ListarClientesComponent,
    ListarOrcamentosComponent,
    FormularioClienteComponent,
    FormularioPessoaFisicaComponent,
    FormularioPessoaJuridicaComponent,
    FormularioOrcamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
