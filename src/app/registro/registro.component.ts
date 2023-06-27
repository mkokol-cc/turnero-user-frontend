import { Component, OnInit } from '@angular/core';
import { Usuario } from '../modelo/usuario';
import { LoginService } from '../services/login.service';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  
  usuario:Usuario = new Usuario();
  paso:number=1;
  
  constructor(private loginService:LoginService, private notificationsService:NotificationsService) { }

  ngOnInit(): void {
  }
  
  submit(){
    //alert("submit")
    this.usuario.enabled=false;//hasta que se verifique su email
    console.log(this.usuario)
    this.loginService.registerUser(this.usuario).subscribe(obj=>{
      console.log("se guardo esto")
      console.log(obj)
      //enviar email para verificacion
      this.notificationsService.enviarEmailBienvenida(this.usuario.email);
    },(error)=>{
      console.log("hubo un error")
      console.log(error)
    })
  }

  irPaso(n:number){
    //alert("cambiaste al paso "+n);
    this.paso=n;
  }

}
