import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJzdWIiOiJoYXJyeUBlbWFpbC5jb20iLCJpYXQiOjE3MTQ5Tc1OTUsImV4cCI6MTcxNDk1OTAzNX0.QqV1WRnxY-6fkf5nieJ92EkSsoISDWn6uMjkxkKAyu0'; 
    if (accessToken) {
      const modifiedRequest = request.clone({
        setHeaders: {
          Authorization: `Bearer ${accessToken}` 
        }
      });
      return next.handle(modifiedRequest);
    }

    return next.handle(request);
  }
}