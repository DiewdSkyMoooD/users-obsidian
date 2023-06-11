import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from '../services/spinner.service';

@Injectable()
export class SpinnerHttpPetitionInterceptor implements HttpInterceptor {

  constructor(private spinnerSvc: SpinnerService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    //it show the spinner when http is in progress
    this.spinnerSvc.show();

    return next.handle(request).pipe(finalize(() => this.spinnerSvc.hide())); //when it finalize spinner is hide
  }
}