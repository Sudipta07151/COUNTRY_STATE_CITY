import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { LoaderstateService } from '../state/loaderstate.service';

@Injectable()
export class LoadersstatusInterceptor implements HttpInterceptor {

  constructor(private loaderstateService:LoaderstateService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('--------------LOADER START--------')
    this.loaderstateService.startLoader();
    return next.handle(request).pipe(
      finalize(()=>{
        this.loaderstateService.endLoader();
        console.log('--------LOADER END---------')
        return;
      })
    );
  }
}
