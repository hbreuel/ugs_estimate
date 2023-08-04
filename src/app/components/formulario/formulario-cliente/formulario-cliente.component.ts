import { Component, OnInit } from '@angular/core';
import { FormularioPessoaJuridicaComponent } from '../formulario-pessoa-juridica/formulario-pessoa-juridica.component';
import { FormularioPessoaFisicaComponent } from '../formulario-pessoa-fisica/formulario-pessoa-fisica.component';



@Component({
  selector: 'app-formulario-cliente',
  templateUrl: './formulario-cliente.component.html',
  styleUrls: ['./formulario-cliente.component.css']
})
export class FormularioClienteComponent implements OnInit {

  tipoForm =''; 


  tipoFormPessoaJuridica() {
    document.querySelector('[name="btnPessoaFisica"]')?.classList.remove('active');
    this.tipoForm = 'pessoaJuridica'
    document.querySelector('[name="btnPessoaJuridica"]')?.classList.add('active');

  }

  tipoFormPessoaFisica() {
    document.querySelector('[name="btnPessoaJuridica"]')?.classList.remove('active');
    this.tipoForm ='pessoaFisica'; 
    document.querySelector('[name="btnPessoaFisica"]')?.classList.add('active');
  }

  constructor() { }

  ngOnInit(): void {
  }




}

