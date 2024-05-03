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
  
/*addTechnology(): void {
    this.techn ologyService.addTechnology({ name: 'Angular', description: 'Angular' })
      .subscribe(
        data => {
          console.log(data);
          this.getTechnologies();
        },
        error => console.log(error)
      );
  }*/
 }
 