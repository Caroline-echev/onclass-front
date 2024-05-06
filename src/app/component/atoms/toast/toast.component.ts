import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

import { Observable, interval, take } from 'rxjs';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  private showComponent$!: Observable<any>;
  @Input() message : string = '';
  @ViewChild('notificationError') myComponentRef!: ElementRef;
  @Output() closeError = new EventEmitter<void>();
  constructor() { }
  onCloseError() {
    this.closeError.emit(); 
  }

  ngOnInit() {
    this.showComponent$ = interval(5000).pipe(take(1));
    this.showComponent$.subscribe(() => {
      this.onCloseError();
    });
  }

  
}
