import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { AdminGuard } from '../services/admin.guard';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  logueado:boolean;

  constructor(private loginService:LoginService, private router:Router) { }

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

  cerrarSesion(){
    if(this.loginService.logout()){
      window.location.reload();
    }
  }

  getToken(){
    alert(this.loginService.getToken())
  }

}
