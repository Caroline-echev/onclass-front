import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { InputComponent } from './input/input.component';



@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    InputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    InputComponent
  ]
})
export class AtomsModule { }
