import { Injectable } from '@angular/core';
import { Pago } from '../modelo/pago';

@Injectable({
  providedIn: 'root'
})
export class PagoService {

  constructor() { }

  obtenerPago(id:number){

  }

  editarPago(pago:Pago){
    //solo para setear su merchant-id
  }
}
