import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

  constructor(private http:HttpClient) { }

  enviarEmailBienvenida(email:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.post(`http://localhost:8080/email/bienvenida/${email}`, { headers })
    .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      console.error('There was an error!', error);
      return of();
    }))
    .subscribe(data => {
      alert("Te enviamos un correo, revisa tu email");
    });
  }

  enviarEmailReestablecerClave(email:string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    this.http.post<any>(`http://localhost:8080/email/reestablecer-clave/${email}`,{headers})
    .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      console.error('There was an error!', error);
      return of();
    }))
    .subscribe(data => {
      alert("Te enviamos un correo, revisa tu email");
    });
  }

  enviarEmailContacto(mensaje:string,email:string){
    const miString = mensaje;
    this.http.post<any>(`http://localhost:8080/email/contacto/${email}`,miString)
    .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
      console.error('There was an error!', error);
      return of();
    }))
    .subscribe(data => {
      alert("Gracias por comunicarte! Te enviamos un correo, revisa tu email");
    });
  }

}
