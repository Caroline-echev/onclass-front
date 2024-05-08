import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputData } from 'src/app/common/interface/input-data';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Technology } from 'src/app/common/technology/technology.class';
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
  boolAlert: boolean = false; 
  boolError: boolean = false;
  form : FormGroup = new FormGroup({});
  newTechnology: Technology = {} as Technology;
  messageAlert: string = '';
  messageError: string = '';
  constructor(
    private fb: FormBuilder,
    private technologyService: TechnologyService
  ) {
    this.newTechnology = new Technology(technologyService);
  }

 
  ngOnInit(): void { 
    this.createform();
  }

  createform() {
    switch (this.model) {
      case 'technology':
        this.form = this.fb.group({
          name: ['', [Validators.required, Validators.maxLength(50)]],
          description: ['', [Validators.required, Validators.maxLength(90)]]
        });
        break;
     
      default:
        console.error('Unsupported model:', this.model);
        break;
    }
  }

  onCloseForm() {
    this.closeForm.emit(); 
  }
  showAlert(): void {
    this.boolAlert =  true;
  }
  showError(): void {
    this.boolError =  true;
  }
  onCloseError() {
    this.boolError = false;
  }
  onClose() {
    this.onCloseForm();
    this.boolAlert = false; 
  }
  
  onSubmit(): void {
    if (this.form.valid && this.model === 'technology') {

      this.newTechnology.name = this.form.value.name;
      this.newTechnology.description = this.form.value.description;
      this.addTechnology(this.newTechnology);
      this.form.reset();
    } else {
      console.error('Form is invalid. Please check for errors');
    }
}

addTechnology( technology: Technology) {
 
  this.technologyService.addTechnology(technology) 
  .subscribe(
    data => {
      console.log('Technology added:', data);
       this.showAlert();
    },
    error => {
      this.messageError = error.message;
      this.showError();
      console.log('clase ta error', this.messageError)
  
    })
}

getErrorMessage( fieldName: string): string {
  if (fieldName.toLowerCase() === 'name'){
    if(this.form.get('name')?.hasError('required')){
      return ` Nombre es obligatorio`;
    }else if(this.form.get('name')?.hasError('maxlength')){
      return `El nombre debe ser menor a 50 caracteres`;
    }
   
  }  else if (fieldName.toLowerCase() === 'description'){
    if(this.form.get('description')?.hasError('required')){
    return `Descripción es obligatorio`;
    }else if(this.form.get('description')?.hasError('maxlength')){
      return `La descripción debe ser menor a 90 caracteres`;
    }
  }
  return '';
}


}

type typeModel = 'technology' | 'capacity' | 'bootcamp'
