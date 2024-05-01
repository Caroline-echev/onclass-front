import { Component, OnInit } from '@angular/core';
import { TechnologyService } from 'src/app/services/technology.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

  technologies: any[] = [];
  errorMessage: string = '';

  constructor(private technologyService: TechnologyService) { }

  ngOnInit(): void {
    this.getTechnologies();
  }

  getTechnologies(): void {
    this.technologyService.getTechnologies()
      .subscribe(
        data => this.technologies = data,
        error => this.errorMessage = 'Error fetching technologies: ' + error.message
      );
  }
}
