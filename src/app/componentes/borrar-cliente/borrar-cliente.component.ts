import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrar-cliente',
  templateUrl: './borrar-cliente.component.html',
  styleUrls: ['./borrar-cliente.component.css']
})
export class BorrarClienteComponent implements OnInit {
  cliente:any
  clientes:any=[];
  dni:String="";

  constructor() { }

  buscarIndice(dni){
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

  borrar(){

  		if( localStorage.clientes !== undefined ){
  			this.cliente = this.buscarIndice( this.dni );

	  		if(this.cliente !== null ) {

	  		this.clientes = JSON.parse( localStorage.clientes );

	  		this.clientes.splice(this.cliente,1);

	  		localStorage.clientes = JSON.stringify(this.clientes);

	  		alert("Cliente borrado con éxito");

	  		}

  		else { 
  			alert("Cliente no existente");
  		}
  	}

  	else { 
  		alert("No existen registros");
  	}
  	this.dni="";
  }

  ngOnInit() {

  }

}
