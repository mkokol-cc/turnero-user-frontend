import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PrincipalComponent } from './principal/principal.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { RegistroComponent } from './registro/registro.component';
import { FaqComponent } from './faq/faq.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DatosPersonalesComponent } from './cuenta/datos-personales/datos-personales.component';
import { ReestablecerClaveComponent } from './reestablecer-clave/reestablecer-clave.component';
import { VerificarCorreoComponent } from './validaciones/verificar-correo/verificar-correo.component';
import { CambiarPasswordComponent } from './validaciones/cambiar-password/cambiar-password.component';
import { ContactoComponent } from './contacto/contacto.component';
import { LicenciasComponent } from './licencias/licencias.component';
import { PaymentComponent } from './checkout/payment/payment.component';
import { CheckoutComponent } from './checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    PrincipalComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    CuentaComponent,
    RegistroComponent,
    FaqComponent,
    DatosPersonalesComponent,
    ReestablecerClaveComponent,
    VerificarCorreoComponent,
    CambiarPasswordComponent,
    ContactoComponent,
    LicenciasComponent,
    PaymentComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
