import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { FormGroup , FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  error:string=''
  constructor(private _AuthService: AuthService , private _Router: Router ) { }

loginForm:FormGroup = new FormGroup({
  email:new FormControl(null , [Validators.required , Validators.email]),
  password:new FormControl(null , [Validators.required])
})





  submitLogIn(formInfo: FormGroup ){
    this._AuthService.logIn(formInfo.value).subscribe((responce)=>{
      if (responce.message == 'success') {
        localStorage.setItem('userToken',JSON.stringify(responce.token))
        this._AuthService.setUerData();
        this._Router.navigate(['/home'])
      }
      else {
        this.error='The E-mail or Password is Correct'
      }
    })
  }



  ngOnInit(): void {
  }

}
