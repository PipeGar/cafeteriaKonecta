import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserModel } from 'src/app/models/user.model';
import { CustomerService } from 'src/app/services/customer.service';
import { FormsConfig } from '../../../ConfigGeneral/forms-config';
import { SecurityService } from '../../../services/security.service';
import { MD5 } from 'crypto-js/md5';




declare const showMessage:any;
declare const data:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})



export class LoginComponent implements OnInit {

  public email: string;
  public password: string;


  fgValidator: FormGroup

  usernameMinLength = FormsConfig.USER_MIN_LENGTH;
  passwordMinLength = FormsConfig.PASSWORD_MIN_LENGTH
  
    constructor(
      private fb: FormBuilder,
      private service: SecurityService,
      private router: Router,
      
      ) { }
  
    ngOnInit(): void {
     this.FormBuilding();
    }
  // Funcion para validar los datos que sean requeridos
    FormBuilding( ) {
      this.fgValidator = this.fb.group({
       
        email: ['',[Validators.required, Validators.email]],
        password: ['', [Validators.required]]
      });
    }

  /**
   * Con este metodo llamamos la funcion de validacion de los datos registrados
   */
  get fgv(){
    return this.fgValidator.controls;
  }

// Funcion para validacion de credeciales en el API y Redireccionas al Home
  entrar(){
    let usr = new UserModel();
    usr.email = this.email;
    usr.password = this.password;

    this.service.entrar(usr).subscribe(result=>{
      if(result.error){
        console.log(result);
        alert(result.mesage)

      }else if(result.access_token){
        console.log(usr); 
        showMessage("Bienvenido")

        localStorage.setItem("token", JSON.stringify(result));
        this.router.navigate(['/home']);
      }
    });
  }

}
