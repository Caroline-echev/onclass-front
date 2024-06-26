import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputData } from 'src/app/common/interface/input-data';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { TechnologyService } from 'src/app/services/technology.service';
import { FormErrorService } from 'src/app/services/form-error.service';
import { Technology } from 'src/app/common/interface/technology';
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
  @Output() added = new EventEmitter<void>();
  boolAlert: boolean = false; 
  boolError: boolean = false;
  form : FormGroup = new FormGroup({});
  newTechnology: Technology = {} as Technology;
  messageAlert: string = '';
  messageError: string = '';
  
  constructor(
    private fb: FormBuilder,
    private technologyService: TechnologyService,
    private formErrorService: FormErrorService
  ) {
  }

  ngOnInit(): void { 
    this.createform();
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

  onSubmit(): void {
    if (this.form.valid && this.model === 'technology') {

      this.newTechnology.name = this.form.value.name;
      this.newTechnology.description = this.form.value.description;
      this.addTechnology(this.newTechnology);
      this.form.reset();
    } else {
      this.messageError = 'Formulario incompleto. Por favor, rellene todos los campos obligatorios';
      this.showError();
    }
}

addTechnology( technology: Technology) {
 
  this.technologyService.addTechnology(technology) 
  .subscribe({
    next: (data : any) => {
      console.log('Technology added:', data);
       this.showAlert();
       this.added.emit();
    },
    error: (error) => {
      this.messageError = error.message;
      this.showError();
    }
    });
}


getErrorMessage(controlName: string): string {
  const control = this.form.get(controlName);
  if (control) {
    return this.formErrorService.getErrorMessage(control, controlName);
  } else {
    return '';   }
}
}
type typeModel = 'technology' | 'capacity' | 'bootcamp'
