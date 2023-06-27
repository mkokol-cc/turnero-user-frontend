import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pago } from 'src/app/modelo/pago';
import { PagoService } from 'src/app/services/pago.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  pago:Pago;

  constructor(private router: ActivatedRoute, private pagoService:PagoService) { }

  ngOnInit(): void {
    const paramMap = this.router.snapshot.queryParamMap;
    const variable = paramMap.get('merchant_order_id');
    console.log(variable); // Imprime '123'
  }

  obtenerPago(idPago:number){
    //obtenemos el pago
    this.pagoService.obtenerPago(idPago)
    //seteamos el Pago
    this.pagoService.editarPago(null)
    //actualizamos el Estado del Pago y lo mostramos
    //this.pagoService.actualizarPago(idPago);
  }

}
