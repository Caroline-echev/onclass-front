import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/component/pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from 'src/app/component/pages/library/library.component';
 
const routes: Routes = [
  { path: '',
  loadChildren: () => import('./component/pages/pages.module').then(m => m.PagesModule)}
]
@NgModule({
  declarations: [],
  imports: [
   
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }