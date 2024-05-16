import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent  {
 @Input() textAlert: string = '¡Tecnología creada!';
  @Output() closeAlert = new EventEmitter<void>();

  onCloseAlert() {
    this.closeAlert.emit(); 
  }
}
