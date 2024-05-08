import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { AtomsModule } from '../atoms/atoms.module';
import { MoleculesModule } from '../molecules/molecules.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { ChildrenModule } from './library/children/children.module';


@NgModule({
  declarations: [
    HomeComponent,
    LibraryComponent, 
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    ChildrenModule

  ],
  exports: [
    HomeComponent,
    LibraryComponent,
  ]
})
export class PagesModule { }
