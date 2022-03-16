import { Component } from '@angular/core';
import { AuthService } from './auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  //  علشان اعمل انا للمستخدم وقت ينتهي صلاحية تسجيل دخولة للموقع 
  // constructor (private _AuthService: AuthService) {
  //   setInterval(()=>{console.log('hello')}, 1000)
  //   this._AuthService.userData.subscribe(()=>{
  //     if(_AuthService.userData.getValue()!=null){
  //       setTimeout(()=>{_AuthService.logout()},5000)
  //     }
  //   })
  // }
  title = 'movies';
}
