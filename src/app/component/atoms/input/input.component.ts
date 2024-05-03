import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
@Input() title: string = '';
@Input() textPlaceholder: string = '';

  inputValue: string = '';

  
  ngOnInit(): void {
  }

}