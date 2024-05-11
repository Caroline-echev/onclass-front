import { Injectable } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Technology } from 'src/app/common/technology/technology.class';
import { ErrorHandlingService } from './error-handling.service';
import { Page } from 'src/app/common/interface/page.interface';
import { environment } from 'src/environments/environment';
@Injectable()
export class TechnologyService {
  private apiUrl: string = environment.apiBaseUrl + 'technology';
  message: string = '';
  constructor(private httpClient: HttpClient,  private errorHandlingService: ErrorHandlingService) {}

  getTechnologies(page: number , size: number  , orderAsc: boolean ): Observable<Page<Technology>> {
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
