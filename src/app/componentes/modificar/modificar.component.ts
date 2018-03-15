import { Component, OnInit } from '@angular/core';
import { ClienteComponent } from '../clientes/cliente/cliente.component'

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

	private dni:String=""
	private nombre:String=""
	private direccion:String=""
	private edad:Number
	private residente:Boolean=false
  private cliente:any
  private clientes:any
  private clienteNuevo:ClienteComponent

  constructor() { }

  noresidente(){
  	this.residente=false;
  }

  ngOnInit() {
  }
 buscarIndice(dni){//metodo repetido
      this.clientes=JSON.parse(localStorage.clientes);
    if(this.clientes.length!=0){
              for(let i in this.clientes){
                if(this.clientes[i].dni==dni){
                  return i;
                }
              }
              return null;
              }
    else{
       return null;
      }

  }
  clearForm(){//metodo repetido

  this.dni="";
  this.nombre="";
  this.direccion="";
  this.edad=undefined;
  this.residente=false;

  }
  modificar(){

    this.cliente = this.buscarIndice(this.dni);
    if(this.cliente !== null){
      this.clienteNuevo = new ClienteComponent(this.dni,this.nombre,this.direccion,this.edad,this.residente);
      this.clientes.splice(this.cliente,1,this.clienteNuevo);
      localStorage.clientes = JSON.stringify(this.clientes);
      alert("Cliente modificado con éxito");
     }
     else{
       alert("Cliente no existente");
     }
     this.clearForm();

  }
  

}
