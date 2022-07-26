
import { Injectable } from '@angular/core';
import { CustomerModel } from '../models/customer.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServiceConfig } from '../ConfigGeneral/services-config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  entity ='/auth/register'

  constructor(
    private http: HttpClient
  ) { }


  /**
   * Metodo para llamar customer POST en el Backend
   * @param customer guardado de datos (Customer)
   */
  CustomerRegistering(customer: CustomerModel): Observable<CustomerModel>{

    return this.http.post<CustomerModel>(`${ServiceConfig.BASE_URL}${this.entity}`, customer, { 
      headers: new HttpHeaders({ 

    })
  });



  }


}
