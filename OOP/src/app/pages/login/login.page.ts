import { AuthService } from './../../services/authorization/auth.service';
import { ApiService } from '../../services/api/api.service';
import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { Login, AuthenticationResponse } from './login.model';

@Component({
  selector: 'oop-login-page',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class LoginPage {
  login = new Login();
  constructor(
    private router: Router,
    private apiSvc: ApiService,
    private authSvc: AuthService
  ) {}
  logForm() {
    this.apiSvc.post('api/Authentication/login', this.login).subscribe(
      (response: AuthenticationResponse) => {
        this.authSvc.saveToken(response.token);
        this.router.navigateByUrl('/products');
      },
      (err) => {
        alert('Invalid');
      }
    );
    return false;
  }
}
