import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PaymentComponent } from './checkout/payment/payment.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { FaqComponent } from './faq/faq.component';
import { PrincipalComponent } from './principal/principal.component';
import { ReestablecerClaveComponent } from './reestablecer-clave/reestablecer-clave.component';
import { RegistroComponent } from './registro/registro.component';
import { AdminGuard } from './services/admin.guard';
import { CambiarPasswordComponent } from './validaciones/cambiar-password/cambiar-password.component';
import { VerificarCorreoComponent } from './validaciones/verificar-correo/verificar-correo.component';


const routes: Routes = [
  {path:'',component:PrincipalComponent},
  {path:'account',component:CuentaComponent,pathMatch:"full", canActivate:[AdminGuard]},
  {path:'faq',component:FaqComponent},
  {path:'forgotten-password',component:ReestablecerClaveComponent},
  {path:'signup',component:RegistroComponent},
  {path: 'verify-email/:token',component: VerificarCorreoComponent },
  {path: 'change-password/:token',component: CambiarPasswordComponent },
  {path: 'payment/:id',component: PaymentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
