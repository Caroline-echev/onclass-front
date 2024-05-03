import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form/form.component';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';



@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    AtomsModule, // Import AtomsModule here
    MoleculesModule  // Import MoleculesModule here
  ],
  exports: [
    FormComponent
  ]
})
export class OrganismsModule { }
