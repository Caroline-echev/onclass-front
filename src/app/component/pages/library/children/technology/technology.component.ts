import { Component, OnInit } from '@angular/core';
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
  textOrder: string = 'A – Z';
  classOrder: string = 'fa-solid fa-arrow-up';
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
    
    this.getTechnologies(this.page, this.size, this.orderAsc);
    
  }
  ngOnChanges(): void {
    this.getTechnologies(this.page, this.size, this.orderAsc);
  }

  showForm(): void {
    this.boolForm =  true;
  }
  onClose() {
    this.boolForm = false; 
    
  }
  
  sort(){
    this.orderAsc = !this.orderAsc;
    this.getTechnologies(this.page, this.size, this.orderAsc)
    if(this.orderAsc){
      this.classOrder = 'fa-solid fa-arrow-up';
      this.textOrder = 'A – Z';
    }else{
      this.classOrder = 'fa-solid fa-arrow-down';
      this.textOrder = 'Z – A';
    }
  }

  getTechnologies(page: number , size: number , orderAsc: boolean) {
    this.technologyService.getTechnologies(page, size, orderAsc).subscribe(
      (page) => {
        console.log('technologies:', page);
        this.technologies = page.content;
      },
      (error) => {
        console.error('technologies error:', error);
      }
    );
  }
  
  
}
