import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InputData } from 'src/app/common/interface/input-data';
import { Technology } from 'src/app/common/interface/technology';
@Component({
  selector: 'app-body-form',
  templateUrl: './body-form.component.html',
  styleUrls: ['./body-form.component.scss']
})
export class BodyFormComponent implements OnInit {
  @Input() inputData: InputData[] = [];

  constructor() { }

  ngOnInit(): void {
  }

 
}