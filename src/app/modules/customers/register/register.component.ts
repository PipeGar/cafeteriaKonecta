import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomerModel } from 'src/app/models/customer.model';
import { FormsConfig } from '../../../ConfigGeneral/forms-config';
import { CustomerService } from '../../../services/customer.service';
import  Axios  from 'axios';

declare const showMessage:any;


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
fgValidator: FormGroup
nameMinLength = FormsConfig.NAME_MIN_LENGTH;
usernameMinLength = FormsConfig.USER_MIN_LENGTH;
passwordMinLength = FormsConfig.PASSWORD_MIN_LENGTH


firstName  = '';
email = '';
password = '';



  constructor(
    private fb: FormBuilder, 
    private service: CustomerService,
    private router: Router) { }

  ngOnInit(): void {
   this.FormBuilding();
  }

  FormBuilding( ) {
    this.fgValidator = this.fb.group({
      firstName: ['',[Validators.required, Validators.minLength(this.nameMinLength)]],
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.passwordMinLength)]]
    });
  }

CustomerRegisterFn(){

  if(this.fgValidator.invalid){
    
    showMessage("Formulario invalido complete los campos") //Cambiar el alert por showMesseage
  }else{
    registro(this.firstName,this.email,this.password)
    this.redirectUser();
async function registro (firstName,email,password) {
  try{
    const {data} = await Axios.post(
      'http://127.0.0.1:8000/api/auth/register',{
     
        name:firstName,
        email: email,
        password: password,
    },
    showMessage("Registro Exitoso"),
    
    ) 
    
  }catch(e){
    console.log(e)
  }
}

  }
  
  
}


// getCustomerData(): CustomerModel {
//   let model = new CustomerModel();
//   model.firstName = this.fgv['firstName'].value;
//   model.email = this.fgv['email'].value;
//   model.password =  this.fgv['password'].value; 
//   return model;
// }
//Validacion de campos en el HTML del Register
get fgv(){
  return this.fgValidator.controls;
}

/**
 * redireccionamiento a Login para iniciar sesion
 */
private redirectUser(): void {
  this.router.navigate(['/security/login'])
}


}
