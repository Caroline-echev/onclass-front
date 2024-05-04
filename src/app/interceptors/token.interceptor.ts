import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJzdWIiOiJoYXJyeUBlbWFpbC5jb20iLCJpYXQiOjE3MTQ4NTI5OTQsImV4cCI6MTcxNDg1NDQzNH0.G1VC7tDpH-IG9V_Q2O1ZAz2Q6hpsS4A3zuvBgYfZ414'; 
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