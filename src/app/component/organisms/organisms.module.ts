import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './form/form.component';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';


@NgModule({
  declarations: [
   FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AtomsModule,
    MoleculesModule
  ],
  exports: [
    FormComponent
  ],  
  
    
})
export class OrganismsModule { }
