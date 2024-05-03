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
  
  constructor(private fb: FormBuilder, private technologyService: TechnologyService) { }
  
  ngOnInit(): void {
    if (this.model === 'technology') {
      this.formTechnology = this.fb.group({
        name: ['', Validators.required],
        description: ['', Validators.required]
      });
    }
  }

  onCloseForm(): void {
    this.closeForm.emit();
  }
  onSubmit(): void {
    if (this.formTechnology.valid) {
      this.newTechnology.name = this.formTechnology.value.name;
      this.newTechnology.description = this.formTechnology.value.description;
      console.log('Technology:', this.newTechnology);
      this.technologyService.addTechnology(this.newTechnology) 
        .subscribe(
          data => {
            console.log('Technology added:', data);
            this.formTechnology.reset(); // Reset form after successful submission (optional)
          },
          error => console.error('Error adding technology:', error)
        );
    } else {
      console.error('Form is invalid. Please check for errors.');
    }
}
}
type typeModel = 'technology' | 'capacity' | 'bootcamp'
