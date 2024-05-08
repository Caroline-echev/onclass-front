import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { InputData } from 'src/app/common/interface/input-data';
import { Technology } from 'src/app/common/technology/technology.class';
import { TechnologyService } from 'src/app/services/technology.service';

@Component({
  selector: 'app-technology',
  templateUrl: './technology.component.html',
  styleUrls: ['./technology.component.scss']
})
export class TechnologyComponent implements OnInit {
  boolForm: boolean = false; 
  technologies: Technology[] = [];
  errorMessage: string = '';
  page: number = 0;
  size: number = 10;
  orderAsc: boolean = true;
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

  constructor(
    private technologyService: TechnologyService
  ) {
  }
  ngOnInit(): void { 
    
    this.getTechnologies();
    
  }
  showForm(): void {
    this.boolForm =  true;
  }
  onClose() {
    this.boolForm = false; 
    
  }
  

  getTechnologies() {
    this.technologyService.getTechnologies().subscribe(
      (page) => {
        console.log('Página de tecnologías obtenida:', page);
        this.technologies = page.content;
      },
      (error) => {
        console.error('Error al obtener tecnologías:', error);
        // Manejo de errores si es necesario
      }
    );
  }
  
  
}
