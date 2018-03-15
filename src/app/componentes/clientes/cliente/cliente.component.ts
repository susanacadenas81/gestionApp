import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  constructor(private dni:String, private nombre:String, private direccion:String,private edad:Number,private residente:Boolean ) { }
  

  ngOnInit() {
  }

}
