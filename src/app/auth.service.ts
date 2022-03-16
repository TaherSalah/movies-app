import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';

HttpClient
@Injectable({
  providedIn: 'root'
})
export class AuthService {
userData=new BehaviorSubject(null) ;
constructor(private _HttpClient: HttpClient ,private _Router: Router ) {
  if(localStorage.getItem('userToken')){
    this.setUerData();
  }
 }
  setUerData() :void{
    let incodedToken = JSON.stringify( localStorage.getItem('userToken'));
    let decodedToken:any = jwtDecode(incodedToken);
    this.userData.next(decodedToken)
    console.log(this.userData);

  }
 register(dataForm: object):Observable<any>{
   return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signup' , dataForm);
 }
 logIn(dataForm: object):Observable<any>{
   return this._HttpClient.post('https://route-egypt-api.herokuapp.com/signin' , dataForm)
 }
 logout(): void
 {
   localStorage.removeItem('userToken');
   this.userData.next(null);
   this._Router.navigate(['/login'])

 }

}
