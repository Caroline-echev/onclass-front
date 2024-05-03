import { Component, OnInit } from '@angular/core';
import { InputData } from 'src/app/common/interface/input-data';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent  {
  boolForm: boolean = false; 

  inputTechnology: InputData[] = [
    {
      title: 'Nombre: ',
      placeholder: 'Nombre de la tecnologia',
      controlName: 'name'
    },
    {
      title: 'Descripción: ',
      placeholder: 'Descripción de la tecnologia',
      controlName: 'description'
    }
  ];
  showForm(): void {
    this.boolForm =  true;
  }
  onClose() {
    this.boolForm = false; 
    
  }
  
}
