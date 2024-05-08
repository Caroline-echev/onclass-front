import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { AtomsModule } from '../atoms/atoms.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
   AlertComponent,
   MenuComponent,
   NavComponent
  
  ],
  imports: [
    CommonModule,
    AtomsModule,
    RouterModule
  ],
  exports: [
    AlertComponent,
    MenuComponent,
    NavComponent
  ]
  
})
export class MoleculesModule { }