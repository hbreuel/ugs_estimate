import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  constructor() { 


    

  }
  

  ngOnInit(): void {
  }

   exibirNav() {
    const nav = document.querySelector("#nav");
    nav?.classList.toggle("left-0")
  
     window.location.href
  
   }
  




}



