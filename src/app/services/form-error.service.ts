import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormErrorService {
  getErrorMessage(control: AbstractControl, controlName: string): string { switch (controlName.toLowerCase()) {
    case 'name':
      if (control.hasError('required')) {
        return `Nombre es obligatorio`;
      } else if (control.hasError('maxlength')) {
        return `El nombre debe ser menor a 50 caracteres`;
      }
      break;
    case 'description':
      if (control.hasError('required')) {
        return `Descripción es obligatoria`;
      } else if (control.hasError('maxlength')) {
        return `La descripción debe ser menor a 90 caracteres`;
      }
      break;
    default:
      break;
  }
  return '';
  }
}
