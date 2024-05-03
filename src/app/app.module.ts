import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor'; 

import { AppComponent } from './app.component';

import { HomeComponent } from 'src/app/component/pages/home/home.component';
import { LibraryComponent } from 'src/app/component/pages/library/library.component';


import { AppRoutingModule } from './app-routing.module';
import { TechnologyComponent } from './component/pages/technology/technology.component';
import { MoleculesModule } from 'src/app/component/molecules/molecules.module';
import { AtomsModule } from 'src/app/component/atoms/atoms.module';
import { NavComponent } from './component/molecules/nav/nav.component';
import { OrganismsModule } from './component/organisms/organisms.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibraryComponent,
    TechnologyComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor, 
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }