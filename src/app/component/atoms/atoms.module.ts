import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [
   ButtonComponent,
   HeaderComponent,
   ToastComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    ToastComponent
  ]
  
})
export class AtomsModule { }
