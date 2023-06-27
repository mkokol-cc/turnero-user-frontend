import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Usuario } from '../modelo/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public loginStatusSubject = new Subject<boolean>();

  constructor(private http:HttpClient) { }


  public generateToken(loginData:any){//mandar par username,password
    /*EL OBJETO ES
    {
      "username":"username",
      "password":"password"
    }
    */
    //console.log(this.http.post(`https://localhost:8080/generate-token`,loginData));
    return this.http.post(`http://localhost:8080/generate-token`,loginData);
  }


  public validateToken(): Observable<boolean> {
    // Encabezados de la solicitud
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });

    // Realizar la solicitud GET y transformar la respuesta utilizando el operador map
    return this.http.get(`http://localhost:8080/verificar-token`, { headers }).pipe(
      map((response) => {
        // Manejar la respuesta de la API y devolver un valor booleano
        //console.log(response);
        return true;
      }),
      catchError((error) => {
        // Manejar el error y devolver un valor booleano
        //console.error(error);
        return of(false);
      })
    );
  }

  public validateVerifyToken(token:string): Observable<boolean> {
    // Encabezados de la solicitud
    /*
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });*/
    // Realizar la solicitud GET y transformar la respuesta utilizando el operador map
    return this.http.get(`http://localhost:8080/email/validar-email/${token}`/*, { headers }*/).pipe(
      map((response) => {
        // Manejar la respuesta de la API y devolver un valor booleano
        //console.log(response);
        return true;
      }),
      catchError((error) => {
        // Manejar el error y devolver un valor booleano
        console.error(error);
        return of(false);
      })
    );
  }


  validateEmail(emailToken:string){
    return this.http.get<Usuario>(`http://localhost:8080/email/validar-email/${emailToken}`);
  }


  //iniciamos el token y lo guardamos en el localStorage
  public loginUser(token:any){
    localStorage.setItem('token',token)
  }

  public isLoggedIn(){
    let tokenStr = localStorage.getItem('token')
    //alert("EL TOKEN ES: "+tokenStr)
    //verificar token
    if(tokenStr == undefined || tokenStr == null || tokenStr == ''){
      return false;
    }
    return true;
  }

  //cerrar sesion y eliminar token
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  public getToken(){
    return localStorage.getItem('token');
  }

  public setUser(user:any){
    localStorage.setItem('user',JSON.stringify(user));
  }

  //obtenemos el usuario si no existe cerramos la sesion
  public getUser(): Observable<Usuario | null> {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr) as Usuario;
      return of(user);
    } else {
      this.logout();
      return of(null);
    }
  }

  /*
  public getUserRol(): Observable<string> {
    return this.getUser().pipe(
      map(user => {
        if (user && user.authorities) {
          const userAuthority = user.authorities.find(authority => authority.authority);
          return userAuthority ? userAuthority.authority : '';
        }
        return '';
      })
    );
  }
  */

  public getCurrentUser(){
    // Encabezados de la solicitud
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.getToken()}`
    });
    return this.http.get<Usuario>(`http://localhost:8080/actual-usuario`, { headers });
  }

  public registerUser(user:Usuario){
    return this.http.post<any>(`http://localhost:8080/usuarios/`,user);
  }

  public editUser(user:Usuario, token:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<Usuario>(`http://localhost:8080/usuarios/editar`,user, { headers });
  }

}
