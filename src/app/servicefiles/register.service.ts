import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RegisterService {
 private BASEURL="http://localhost:3000/api/"
  constructor(private _http:HttpClient) { }

  PostTheRegisterData(value){
   return this._http.post(`${this.BASEURL}register`,value);
  }
  postTheLoginData(value){
    return this._http.post(`${this.BASEURL}login`,value);
  }
}
