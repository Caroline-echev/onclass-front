import { Injectable } from '@angular/core';
import { Observable, Subject, catchError, observable, throwError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable({ providedIn: 'root' }) 
export class ErrorHandlingService {
  errorMessage : string = '';

  handleError(error: HttpErrorResponse): string {
    if (error instanceof HttpErrorResponse) {
    
      switch (error.status) {
        case 400:
          this.errorMessage = 'Parámetros de solicitud no válidos';
          break;
        case 401:
          this.errorMessage ='No estás autorizado para esta acción';
          break;
        case 403:
          this.errorMessage = 'No tienes permiso para acceder a este recurso';
          break;
        case 404:
          this.errorMessage = 'No se encontró el recurso solicitado';
          break;
        case 409:
          this.errorMessage = 'Conflicto detectado. El elememto que desea registrar ya existe';
          break;
        default:
          this.errorMessage = error.error.message || error.error.error ;
      }

      console.log('Error:', this.errorMessage);
    } else {
    console.log('Other Error:', error);
    }

    return this.errorMessage; 
  }
}