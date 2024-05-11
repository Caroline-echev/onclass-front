import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChildrenRoutingModule } from './children-routing.module';
import { CapacityComponent } from './capacity/capacity.component';
import { BootcampComponent } from './bootcamp/bootcamp.component';
import { AtomsModule } from '../../../atoms/atoms.module';
import { MoleculesModule } from '../../../molecules/molecules.module';
import { OrganismsModule } from '../../../organisms/organisms.module';
import { TechnologyComponent } from './technology/technology.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    TechnologyComponent,
    CapacityComponent,
    BootcampComponent
  ],
  imports: [
    CommonModule,
    ChildrenRoutingModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    NgxPaginationModule
  ],
  exports: [
    TechnologyComponent,
    CapacityComponent,
    BootcampComponent

  ]
})
export class ChildrenModule { }
