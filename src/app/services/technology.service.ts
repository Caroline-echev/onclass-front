import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Technology } from 'src/app/common/technology/technology.class';
import { ErrorHandlingService } from './error-handling.service';

@Injectable()
export class TechnologyService {
  private apiUrl: string = 'http://localhost:8090/technology';
  message: string = '';
  constructor(private httpClient: HttpClient,  private errorHandlingService: ErrorHandlingService) {}

  getTechnologies(): Observable<Technology[]> {
    return this.httpClient.get<Technology[]>(this.apiUrl + '/getTechnologies');
  }

  addTechnology(technology: Technology): Observable<any> {
    return this.httpClient.post<Technology>(this.apiUrl + '/addTechnology', technology)
    .pipe(
      catchError((error) => {
        const errorMessage = this.errorHandlingService.handleError(error);
        console.log('Error servicio:', errorMessage);
        return throwError(new Error(errorMessage));
      })
    );

  }
}
