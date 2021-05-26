import { Router } from '@angular/router';
import { AuthService } from './../../services/authorization/auth.service';
import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'oop-side-menu',
  templateUrl: 'side.menu.component.html',
})
export class SideMenuCompoonent {
  constructor(private authSvc: AuthService, private router: Router) {}
  logOut() {
    this.authSvc.logOut();
    this.router.navigateByUrl('home');
  }
}
