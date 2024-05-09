import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { ButtonComponent } from './button/button.component';
import { HeaderComponent } from './header/header.component';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
   ButtonComponent,
   HeaderComponent,
   ToastComponent,
   OrderComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ButtonComponent,
    HeaderComponent,
    ToastComponent,
    OrderComponent
  ]
  
})
export class AtomsModule { }
