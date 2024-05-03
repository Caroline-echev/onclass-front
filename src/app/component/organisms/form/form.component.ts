import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputData } from 'src/app/common/interface/input-data';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  @Input() inputTechnology: InputData[] = [];
  @Output() closeForm = new EventEmitter<boolean>();


  onCloseForm(): void {
    this.closeForm.emit(true); 
  }
 
}

