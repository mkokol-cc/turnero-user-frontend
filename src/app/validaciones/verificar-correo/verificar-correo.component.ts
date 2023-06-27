import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NotificationsService } from 'src/app/services/notifications.service';

@Component({
  selector: 'app-verificar-correo',
  templateUrl: './verificar-correo.component.html',
  styleUrls: ['./verificar-correo.component.css']
})
export class VerificarCorreoComponent implements OnInit {

  email:string;
  tokenValido:boolean;

  constructor(private route: ActivatedRoute, private loginService:LoginService, 
    private notificationsService:NotificationsService) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      // Aquí puedes acceder a los parámetros de la URL
      const token = params.get('token');
      //const name = params.get('name');
  
      // Haz lo que necesites con los parámetros obtenidos
      console.log('TOKEN:', token);
      //console.log('Name:', name);
      this.verificarToken(token);
    });
  }

  verificarToken(token:string){
    this.loginService.validateVerifyToken(token).subscribe(obj=>{
      console.log(obj)
      this.tokenValido=obj;
      //alert("Se verifico tu correo y TE REGALAMOS 1 MES GRATIS! ya puedes loguearte. Seras redirigido a la pagina principal")
    },(error)=>{
      this.tokenValido=false;
      console.log(error);
      //alert("esta verificacion ha expirado")
    });
  }

  reenviarCorreo(){
    if(this.email){
      this.notificationsService.enviarEmailBienvenida(this.email);
    }
  }
  

}
