import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Technology } from 'src/app/common/technology/technology.class';
import { ErrorHandlingService } from './error-handling.service';
import { Page } from 'src/app/common/interface/page.interface';
@Injectable()
export class TechnologyService {
  private apiUrl: string = 'http://localhost:8090/technology';
  message: string = '';
  constructor(private httpClient: HttpClient,  private errorHandlingService: ErrorHandlingService) {}

 /* getAllTechnologies(): Observable<Technology[]> {
  
    return this.httpClient.get<Technology[]>(this.apiUrl + '/getTechnologies')
    .pipe(
      catchError((error) => {
        const errorMessage = this.errorHandlingService.handleError(error);
        console.log('Error servicio:', errorMessage);
        return throwError(new Error(errorMessage));
      })
    );

  }*/
  getTechnologies(page: number = 0, size: number = 10, orderAsc: boolean = true): Observable<Page<Technology>> {
    return this.httpClient.get<Page<Technology>>(`${this.apiUrl}/getTechnologies?page=${page}&size=${size}&orderAsc=${orderAsc}`)
      .pipe(
        catchError((error) => {
          const errorMessage = this.errorHandlingService.handleError(error);
          console.log('Error en el servicio al obtener tecnologías:', errorMessage);
          return throwError(new Error(errorMessage));
        })
      );
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
