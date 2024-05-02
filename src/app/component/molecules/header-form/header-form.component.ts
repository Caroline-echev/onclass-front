import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss']
})
export class HeaderFormComponent implements OnInit {
  @Input() title: string = ''; 
   @Input() boolForm: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  @Output() closeForm = new EventEmitter<boolean>();

  onCloseForm(): void {
    this.closeForm.emit(true); 
  }
}
