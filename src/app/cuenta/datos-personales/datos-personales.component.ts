import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/modelo/usuario';

@Component({
  selector: 'app-datos-personales',
  templateUrl: './datos-personales.component.html',
  styleUrls: ['./datos-personales.component.css']
})
export class DatosPersonalesComponent implements OnInit {

  @Input() usuario:Usuario;
  constructor() { }

  ngOnInit(): void {
  }

  mostrarUsuario(){
    console.log(this.usuario)
  }

}
