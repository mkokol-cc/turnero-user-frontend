import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  baseURL:string="http://localhost:8080/mp";

  constructor(private httpClient:HttpClient,private serviceLogin:LoginService) { }

  obtenerLinkPagoPorId(idLicencia:number):Observable<any>{
    const token = this.serviceLogin.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.httpClient.get<any>(`${this.baseURL}/createAndRedirect/${idLicencia}`);
  }

  

}
