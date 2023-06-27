import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  email:string;

  recuperarPass:number=0;

  constructor(private loginService:LoginService,private notificationService:NotificationsService) { }

  ngOnInit(): void {
  }

  cambiarPantalla(n:number){
    this.recuperarPass=n;
  }

  reestablecerClave(){
    alert("ahora se deberia enviar el mail")
    this.notificationService.enviarEmailReestablecerClave(this.email);
  }

  submit(){
    const loginData: any = {
      username: this.username,
      password: this.password
    };
    this.loginService.generateToken(loginData).subscribe(obj=>{
      const valorToken2: string = obj['token'];
      this.loginService.loginUser(valorToken2)
      window.location.reload();
    },(error=>{
      alert("Hubo un error en el servidor, contacte con el administrador")
      console.log(error)
    }));
  }

}
