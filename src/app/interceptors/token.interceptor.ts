import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiQURNSU4iLCJzdWIiOiJoYXJyeUBlbWFpbC5jb20iLCJpYXQiOjE3MTUxOTYzOTgsImV4cCI6MTcxNzc4ODM5OH0.flHbZYbcg8GL7YzCvi4qKjI3RjVV1tsYx_TXtQIR3xk'; 
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