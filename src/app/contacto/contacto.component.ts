import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  contactEmail:string;
  message:string;

  constructor(private notificationsService:NotificationsService) { }

  ngOnInit(): void {
  }

  send(){
    this.notificationsService.enviarEmailContacto(this.message,this.contactEmail);
    //alert("enviar el mensaje");
  }

}
