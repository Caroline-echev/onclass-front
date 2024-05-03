import { NgModule } from '@angular/core';
import { HomeComponent } from 'src/app/component/pages/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LibraryComponent } from 'src/app/component/pages/library/library.component';
 
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
  { path: '' , redirectTo: 'home', pathMatch: 'full' },
]
@NgModule({
  declarations: [],
  imports: [
   
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }