import { Component/*, OnInit */} from '@angular/core';
/*
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoginService } from './services/login.service';
*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent /*implements OnInit*/{
  title = 'users-frontend';
/*
  logueado:boolean;

  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
    this.estaLogueado().subscribe(obj=>{
      this.logueado=obj;
      alert("soy app.component.ts")
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
  */
}
