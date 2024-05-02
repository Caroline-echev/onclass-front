import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.scss']
})
export class LibraryComponent implements OnInit {

 
  boolForm: boolean = false; 
  constructor() { }

  ngOnInit(): void {
   
  }

  showForm(): void {
    this.boolForm =  true;
  }
  onCloseFormReceived(event: boolean) {
    this.boolForm = false; 
  }
  
}
