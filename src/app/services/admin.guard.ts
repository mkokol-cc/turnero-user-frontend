import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { catchError } from 'rxjs/operators';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private loginService:LoginService, private router:Router){}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    //si esta logueado
    //alert("ENTRE EN LA GUARDIA")
    if(this.loginService.isLoggedIn()){
      //si el token es valido -- SI QUIERE MANTENER SESION INICIADA ESTE CONDICIONAL SE ESQUIVA Y DEVULEVE TRUE
      //console.log(this.loginService.getToken());
      //alert(this.loginService.getToken());
      return this.loginService.validateToken().pipe(
        map((validToken) => {
          if (validToken) {
            return true;
          } else {
            this.router.navigate(['']);
            return false;
          }
        }),
        catchError(() => {
          //alert("no es valido")
          this.router.navigate(['']);
          return of(false);
        })
      );
    }
    this.router.navigate(['']);
    return false;
  }  
}
