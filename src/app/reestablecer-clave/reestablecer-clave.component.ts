import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-reestablecer-clave',
  templateUrl: './reestablecer-clave.component.html',
  styleUrls: ['./reestablecer-clave.component.css']
})
export class ReestablecerClaveComponent implements OnInit {

  email:string;

  constructor(private notification:NotificationsService) { }

  ngOnInit(): void {
  }

  submit(){
    /*
    this.notification.enviarEmailReestablecerClave(this.email).pipe(
      map((envio) => {
        if (envio) {
          alert("Se envio un correo a tu cuenta")
          return true;
        } else {
          alert("Hubo un error al enviar el correo a tu cuenta")
          return false;
        }
      }),
      catchError(() => {
        alert("Hubo un error al enviar el correo a tu cuenta")
        return of(false);
      })
    );
    */
    ///*
    this.notification.enviarEmailReestablecerClave(this.email)
    //*/
    //this.notification.enviarEmailReestablecerClave(this.email);
  }

}
