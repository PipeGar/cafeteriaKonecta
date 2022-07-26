import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceConfig } from 'src/app/ConfigGeneral/services-config';
import { CategoryModel } from '../../models/parameters/category.model';
import { SecurityService } from '../security.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  /**
   * en este campo de entity que es la variable es para asignarle lo siguiente a la url
   */
entity ='Category';
token: string = '';

  constructor(private http: HttpClient, private securityService: SecurityService) { 
    // this.token = this.securityService.();
  }

 

  getAllRecords(): Observable<CategoryModel[]>{
    return this.http.get<CategoryModel[]>(`${ServiceConfig.BASE_URL}${this.entity}`);
  }

  saveNewRecord(record: CategoryModel):Observable<CategoryModel>{
    return this.http.post<CategoryModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  EditRecord(record: CategoryModel):Observable<CategoryModel>{
    return this.http.post<CategoryModel>(`${ServiceConfig.BASE_URL}${this.entity}`, record, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }

  DeleteRecord(recordId: string):Observable<any>{
    return this.http.delete(`${ServiceConfig.BASE_URL}${this.entity}/${recordId}`, {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    });
  }


}
