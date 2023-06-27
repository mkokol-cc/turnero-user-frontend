import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { PaymentService } from '../services/payment.service';

@Component({
  selector: 'app-licencias',
  templateUrl: './licencias.component.html',
  styleUrls: ['./licencias.component.css']
})
export class LicenciasComponent implements OnInit {

  logueado:boolean;

  constructor(private loginService:LoginService, private paymentService:PaymentService) { }

  ngOnInit(): void {
    this.estaLogueado().subscribe(obj=>{
      this.logueado=obj;
    })
  }

  estaLogueado():Observable<boolean>{
    return this.loginService.validateToken().pipe(
      map((validToken) => {
        if (validToken) {
          return true;
        } else {
          return false;
        }
      }),
      catchError(() => {
        return of(false);
      })
    );
  }

  payLicence(id:number){
    if(this.logueado){
      this.paymentService.obtenerLinkPagoPorId(id).subscribe(obj=>{
        //devuelve un JSON "link":"......."
        window.location.replace(obj.link);
      },(error)=>{
        alert("Disculpe, hubo un error. Contáctenos por Wpp")
        console.log(error);
      })
    }else{
      alert("redirigir al signup")
      //window.location.replace(obj.link);
    }
  }

}
