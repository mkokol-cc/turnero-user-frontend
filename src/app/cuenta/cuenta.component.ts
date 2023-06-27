import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../modelo/usuario';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.component.html',
  styleUrls: ['./cuenta.component.css']
})
export class CuentaComponent implements OnInit {

  usuario:Observable<Usuario>;
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.usuario=this.loginService.getCurrentUser()
  }

  verUser(){
    this.usuario.subscribe(obj=>{
      console.log(obj)
    })
  }

}
