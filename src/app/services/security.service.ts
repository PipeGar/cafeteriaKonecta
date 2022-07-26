import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ServiceConfig } from '../ConfigGeneral/services-config';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})

export class SecurityService {

  userData = new BehaviorSubject<UserModel>(new UserModel);

  constructor(
    private _http: HttpClient
  ) { 
    this.verifyCurrentSession();
   }


  verifyCurrentSession(){
    let currentSession = this.getSessionData();
    if(currentSession){
      this.setuserData(JSON.parse(currentSession));
    }
  }

setuserData(user: UserModel){
  this.userData.next(user);
}


/**
 * 
 * Se Obtiene el estado del usuario
 */
getuserData(){
  return this.userData.asObservable();
}

  public url = "http://127.0.0.1:8000/api/";

  entrar(usuairo:UserModel){

    let datos ={
      'email': usuairo.email,
      'password': usuairo.password 
    };
      return this._http.post<any>(this.url+"auth/login", datos);
  }


  saveSessonData(sessionData: any): Boolean {
    let currentSession = localStorage.getItem('session');
    if(currentSession){
      return false;
    }else{
      let data: UserModel = {
         id: sessionData.data.id,
         name: sessionData.data.name,
         email: sessionData.data.email,
         token: sessionData.token,
         isLogged: true
      };
      localStorage.setItem('session', JSON.stringify(data)); 
      this.setuserData(data);
      return true
    }
  }

  getSessionData(){
    let currentSession = localStorage.getItem('session');
    return currentSession;
  }

  logout(){
    localStorage.removeItem('session');
  }

}




