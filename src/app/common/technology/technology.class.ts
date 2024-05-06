import { ErrorHandlingService } from 'src/app/services/error-handling.service';
import { TechnologyService } from 'src/app/services/technology.service';
export  interface Technology {
  name: string;
  description: string;
  id?: number; 
}
export class Technology {
   
   technologies: any[] = [];
   errorMessage: string = '';
   constructor(private technologyService: TechnologyService) {}

  
   getTechnologies(): void {
    this.technologyService.getTechnologies()
      .subscribe(
        data => this.technologies = data,
        error => this.errorMessage = error.message
      );
    }
      addTechnology(technology: Technology): any {
        this.technologyService.addTechnology(technology) 
          .subscribe(
            data => {
              console.log('Technology added:', data);
              return technology;
            },
            error => {
              const messageError = error.message;
              console.log('clase t error', messageError)
              return messageError;
            }
          )
      }

      
      
  }
