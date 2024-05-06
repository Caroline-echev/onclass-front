import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { TechnologyComponent } from './technology/technology.component';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
  
  ],
 
})
export class PagesModule { }
