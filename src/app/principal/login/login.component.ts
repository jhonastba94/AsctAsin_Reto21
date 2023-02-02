import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AutenticacionService } from 'src/app/services/autenticacion.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
  export class LoginComponent {

      constructor(private autenticacion: AutenticacionService, private router: Router){}

      redireccion = '';
      usuario= 'jhon';
      password = '12345';

      resultado = false;
      mensaje = '';

      login(user:string, pass:string){

        this.autenticacion.login();
        this.redireccion = this.autenticacion.urlUsuarioIntentaAcceder;
        this.autenticacion.urlUsuarioIntentaAcceder = '';
        this.router.navigate([this.redireccion]);

        if(user == this.usuario && pass == this.password){
        this.resultado = true;
        this.mensaje="";
        this.router.navigate(['/home']);
        }else{
        this.resultado = false;
        this.mensaje="Usuario y clave es incorrecto, intentalo nuevamente.";
      }
    }
  }

  

