import { Component, OnInit } from '@angular/core';
import { InputData } from 'src/app/common/interface/input-data';
import { Technology } from 'src/app/common/interface/technology';
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
  totalItems: number = 0;
  pagination: number = 0;
  maxSize: number = 5;
  inputTechnology: InputData[] = [
    {
      title: 'Nombre ',
      placeholder: 'Nombre de la tecnologia',
      controlName: 'name',
     
    },
    {
      title: 'Descripción ',
      placeholder: 'Descripción de la tecnologia',
      controlName: 'description',
     
  
    }
  ];
  


  constructor(
    private technologyService: TechnologyService
  ) {
  }
  ngOnInit(): void {
    this.getTechnologies();
  }

  onPageChange(page: number): void {
    this.page = page -1;
    this.getTechnologies();
  }

  onPageSizeChange(pageSize: number): void {
    console.log('onPageSizeChange', pageSize);
    this.size = pageSize;
    this.getTechnologies();
  }

  showForm(): void {
    this.boolForm =  true;
  }
  onClose() {
    this.boolForm = false; 
  }
  
  sort(){
    this.orderAsc = !this.orderAsc;
    this.getTechnologies()
    if(this.orderAsc){
      this.classOrder = 'fa-solid fa-arrow-up';
      this.textOrder = 'A – Z';
    }else{
      this.classOrder = 'fa-solid fa-arrow-down';
      this.textOrder = 'Z – A';
    }
  }


  getTechnologies() {
    this.technologyService.getTechnologies(this.page, this.size, this.orderAsc)
    .subscribe({
      next: (page) => {
        console.log('technologies:', page);
        this.technologies = page.content;
        this.totalItems = page.totalElements;
      },
      error: (error) => {
        console.error('technologies error:', error);
      }
    })
  }
  
  
}
