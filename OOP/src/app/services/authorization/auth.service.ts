import { Injectable } from '@angular/core';
import { AUTH_TOKEN_LOCAL_STORAGE } from './auth.constants';

@Injectable()
export class AuthService {
  saveToken(accessToken: string): void {
    localStorage.setItem(AUTH_TOKEN_LOCAL_STORAGE, accessToken);
  }

  getToken(): string {
    return localStorage.getItem(AUTH_TOKEN_LOCAL_STORAGE) as string;
  }

  logOut() {
    localStorage.removeItem(AUTH_TOKEN_LOCAL_STORAGE);
  }
}
