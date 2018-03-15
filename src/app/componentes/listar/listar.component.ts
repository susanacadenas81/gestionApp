import { Component, OnInit } from '@angular/core';
import { ClientesComponent } from '../clientes/clientes.component';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  clientes:any=[];
  constructor() { }


  ngOnInit() {

  localStorage.clientes!==undefined?this.clientes=JSON.parse(localStorage.clientes):this.clientes=[];

  }

}
