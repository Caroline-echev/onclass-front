import { Component, OnInit } from '@angular/core';
import { InputData } from 'src/app/common/interface/input-data';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
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
  constructor() { }

  ngOnInit(): void {
   
  }

 
}

