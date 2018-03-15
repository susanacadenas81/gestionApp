import { Component, OnInit } from '@angular/core';
import { ClienteComponent } from '../clientes/cliente/cliente.component';
@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent{

  dni:String=""
  nombre:String=""
  direccion:String=""
  edad:Number
  residente:Boolean=false
  cliente:ClienteComponent
  clientes:any=[]


  constructor() { }
  noresidente(){
  	this.residente=false;
  }

  reg(){
  this.cliente=new ClienteComponent(this.dni,this.nombre,this.direccion,this.edad,this.residente);
  localStorage.clientes!==undefined?this.clientes=JSON.parse(localStorage.clientes):this.clientes;
  this.clientes.push(this.cliente);
  localStorage.clientes = JSON.stringify(this.clientes);
  this.clearForm();
  }
  clearForm(){
  this.dni="";
  this.nombre="";
  this.direccion="";
  this.edad=undefined;
  this.residente=false;
  }

}
