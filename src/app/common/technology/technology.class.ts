import { TechnologyService } from 'src/app/services/technology.service';
export  interface Technology {
  name: string;
  description: string;
  id?: number; 
}
export class Technology {
   
   technologies: any[] = [];
   errorMessage: string = '';
   constructor(private technologyService: TechnologyService ) {}

  
   getTechnologies(): void {
    this.technologyService.getTechnologies()
      .subscribe(
        data => this.technologies = data,
        error => this.errorMessage = 'Error fetching technologies: ' + error.message
      );
    }
      addTechnology(technology: Technology): Technology {
        this.technologyService.addTechnology(technology) 
          .subscribe(
            data => {
              console.log('Technology added:', data);
               
            },
            error => console.error('Error adding technology:', error)
          );
          return technology;
      }
  }
