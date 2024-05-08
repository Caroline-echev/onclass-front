import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CapacityComponent } from './capacity/capacity.component';
import { BootcampComponent } from './bootcamp/bootcamp.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
 { path: 'technology', component:TechnologyComponent},
  { path: 'capacity', component: CapacityComponent },
  { path: 'bootcamp', component: BootcampComponent},
  { path: '' , redirectTo: 'technology', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChildrenRoutingModule { }
