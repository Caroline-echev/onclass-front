import { Component, ElementRef, EventEmitter, HostListener, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  size: number = 10;
  @Output() pageSizeChange = new EventEmitter<number>();

  selectedOption: string = '10 por página';
  showOptions: boolean = false;

  
  constructor(private elementRef: ElementRef) {}
  toggleOptions() {
    this.showOptions = !this.showOptions;
  }

  @HostListener('document:click', ['$event'])
  onClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showOptions = false; // Cierra las opciones si se hace clic fuera del componente
    }
  }
  selectOption(option: string, size: number) {
    this.selectedOption = option;
    this.size = size;
    console.log(this.selectedOption);
    console.log(this.size);
    this.pageSizeChange.emit(this.size);
    this.showOptions = false;
  }
  isClickedInsideComponent(event: MouseEvent): boolean {
    return this.elementRef.nativeElement.contains(event.target);
  }
}
