import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent {

  

  @Input() text: string = '';
  @Input() iconUrl?: string;
  @Input() classText: textClass = '';

  get hasIconUrl() {
    return this.iconUrl !== undefined && this.iconUrl !== null;
  }
}

type textClass = 'text__nav' | 'text__container' | 'text__menu' |'' ;