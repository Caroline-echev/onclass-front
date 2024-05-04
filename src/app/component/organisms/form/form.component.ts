import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputData } from 'src/app/common/interface/input-data';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
import { Technology } from 'src/app/common/interface/technology';
import { TechnologyService } from 'src/app/services/technology.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent  implements OnInit {
  @Input() inputData: InputData[] = [];
  @Input() title: string = '';
  @Input() model: typeModel = 'technology';
  @Output() closeForm = new EventEmitter<void>();
  formTechnology: FormGroup = new FormGroup({});
  newTechnology: Technology = {} as Technology;
  messageAlert: string = 'Nombre Obligatorio';
  constructor(
    private fb: FormBuilder, 
    private technologyService: TechnologyService) { }
  
  ngOnInit(): void {
    if (this.model === 'technology') {
      this.formTechnology = this.fb.group({
        name: ['', [Validators.required, Validators.maxLength(50)]],
        description: ['', [Validators.required, Validators.maxLength(90)]]
      });
    }
    
  }

  onCloseForm(): void {
    this.closeForm.emit();
  }
  onSubmit(): void {
    if (this.formTechnology.valid && this.model === 'technology') {
      this.newTechnology.name = this.formTechnology.value.name;
      this.newTechnology.description = this.formTechnology.value.description;
      console.log('Technology:', this.newTechnology);
      this.technologyService.addTechnology(this.newTechnology) 
        .subscribe(
          data => {
            console.log('Technology added:', data);
            this.formTechnology.reset(); 
          },
          error => console.error('Error adding technology:', error)
        );
    } else {
      console.error('Form is invalid. Please check for errors.');
    }
}
getErrorMessage( fieldName: string): string {
  if (fieldName.toLowerCase() === 'name'){

    if(this.formTechnology.get('name')?.hasError('required')){
      return ` Nombre es obligatorio`;
    }else if(this.formTechnology.get('name')?.hasError('maxlength')){
      return `El nombre debe ser menor a 50 caracteres`;
    }
   
  }  else if (fieldName.toLowerCase() === 'description'){

    if(this.formTechnology.get('description')?.hasError('required')){
    return `Descripción es obligatorio`;
    }else if(this.formTechnology.get('description')?.hasError('maxlength')){
      return `La descripción debe ser menor a 90 caracteres`;
    }
    
  }
  
  return '';
}


}

type typeModel = 'technology' | 'capacity' | 'bootcamp'
