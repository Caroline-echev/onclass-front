import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { InputData } from 'src/app/common/interface/input-data';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  inputTechnology: InputData[] = [
    {
      title: 'Nombre: ',
      placeholder: 'Nombre de la tecnologia',
    },
    {
      title: 'Descripción: ',
      placeholder: 'Descripción de la tecnologia',
    }
  ];
  @Output() closeForm = new EventEmitter<boolean>();


  onCloseForm(): void {
    this.closeForm.emit(true); 
  }
 
}

