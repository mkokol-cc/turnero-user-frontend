import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/modelo/usuario';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-cambiar-password',
  templateUrl: './cambiar-password.component.html',
  styleUrls: ['./cambiar-password.component.css']
})
export class CambiarPasswordComponent implements OnInit {

  usuario:Usuario;
  habilitarFormulario:number;
  newPassword:string;
  repeatPassword:string;

  t:string;
  constructor(private route: ActivatedRoute, private loginService:LoginService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const token = params.get('token');
      console.log('TOKEN:', token);
      this.t = token;
      this.validarToken(token);
    });
  }

  
  validarToken(token:string){
    this.loginService.validateEmail(token).subscribe(obj=>{
      console.log(obj)
      this.habilitarFormulario=1;
      this.usuario=obj;
      alert("Se verifico tu correo!, ya puedes loguearte. Seras redirigido a la pagina principal")
    },(error)=>{
      this.habilitarFormulario=2;
      alert("esta verificacion ha expirado")
      console.log(error);
    });
  }

  ngSubmit(){
    //editar usuario
    if(this.newPassword==this.repeatPassword){
      this.usuario.password=this.newPassword;
      console.log(this.usuario)
      this.guardarUsuario(this.usuario)
    }else{
      alert("Las contraseñas no coinciden.")
    }
  }

  guardarUsuario(usuario:Usuario){
    this.loginService.editUser(this.formatUser(usuario),this.t).subscribe(obj=>{
      alert("Se cambio la contraseña.")
      console.log(obj)
    },(error)=>{
      alert("Hubo un error al guardar los datos.")
      console.log(error)
    })
  }


  formatUser(originalObject:Usuario):Usuario{
    const newUser = new Usuario();
    newUser.id = originalObject.id;
    newUser.email = originalObject.email;
    newUser.password = originalObject.password;
    newUser.nombre = originalObject.nombre;
    newUser.apellido = originalObject.apellido;
    newUser.dni = originalObject.dni;
    newUser.telefono = originalObject.telefono;
    newUser.enabled = originalObject.enabled;
    newUser.perfil = originalObject.perfil;
    newUser.fbEmpresarial = originalObject.fbEmpresarial;
    newUser.wppEmpresarial = originalObject.wppEmpresarial;
    newUser.igEmpresarial = originalObject.igEmpresarial;
    newUser.emailEmpresarial = originalObject.emailEmpresarial;
    newUser.twitterEmpresarial = originalObject.twitterEmpresarial;
    newUser.ubicacionEmpresarial = originalObject.ubicacionEmpresarial;
    newUser.autopago = originalObject.autopago;
    newUser.deshabilitarAutopagoSiCambiaElPrecio = originalObject.deshabilitarAutopagoSiCambiaElPrecio;
    newUser.dbUrl = originalObject.dbUrl;
    newUser.dbUsername = originalObject.dbUsername;
    newUser.dbPassword = originalObject.dbPassword;
    newUser.pagos = originalObject.pagos;
    return newUser;
  }

}
