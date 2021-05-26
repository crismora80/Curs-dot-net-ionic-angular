import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class UnauthenticatedInterceptor implements HttpInterceptor {
  constructor(
    private alertCtrl: AlertController,
    private navCtrl: NavController
  ) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next
      .handle(request)
      .pipe(catchError((error: HttpErrorResponse) => this.handleError(error)));
  }

  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 401) {
      this.alertCtrl
        .create({
          header: 'You are not logged in!',
          message: 'Please enter your credentials in order to continue',
          buttons: [
            {
              text: 'Ok',
              handler: () => {
                this.navCtrl.navigateRoot('');
              },
            },
          ],
        })
        .then((alert) => alert.present());
    }
    return throwError(error);
  }
}
