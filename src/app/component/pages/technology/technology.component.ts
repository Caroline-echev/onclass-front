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
    },
    {
      title: 'Descripción: ',
      placeholder: 'Descripción de la tecnologia',
    }
  ];
  showForm(): void {
    this.boolForm =  true;
  }
  onCloseFormReceived(event: boolean) {
    this.boolForm = false; 
  }
  
}
