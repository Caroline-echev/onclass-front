import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';
import { SelectComponent } from './select/select.component';


@NgModule({
  declarations: [
   ButtonComponent,
   HeaderComponent,
   ToastComponent,
   OrderComponent,
   SelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    ToastComponent,
    OrderComponent,
    SelectComponent
  ]
  
})
export class AtomsModule { }
