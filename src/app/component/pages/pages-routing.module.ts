import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LibraryComponent } from './library/library.component';
import { TechnologyComponent } from './library/children/technology/technology.component';
import { CapacityComponent } from './library/children/capacity/capacity.component';
import { BootcampComponent } from './library/children/bootcamp/bootcamp.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'library', component: LibraryComponent, 
  loadChildren: () => import('src/app/component/pages/library/children/children.module').then(m => m.ChildrenModule)
},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
@NgModule({
  declarations: [],
  imports: [
   
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
