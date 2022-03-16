import { Component, HostListener, OnInit  } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLogin: boolean = false;
  constructor(private _AuthService: AuthService) { }

  ngOnInit(): void {
    this._AuthService.userData.subscribe(() => {
      if (this._AuthService.userData.getValue() != null) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    })
  }

  collLogOut() {
    this._AuthService.logout()
  }


  // /*scroling */
  // // navbarFixed: boolean = false;
  // // @HostListener('window:scroll', ['$event']) onscroll() {
  // //   if (window.scrollY > 100) {
  // //     this.navbarFixed = true;
  // //   } else {
  // //     this.navbarFixed=false
//      }
// }
}
