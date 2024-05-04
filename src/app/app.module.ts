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
import { TechnologyService } from 'src/app/services/technology.service'; 
import { ButtonComponent } from './component/atoms/button/button.component';
import { HeaderComponent } from './component/atoms/header/header.component';
import { MenuComponent } from './component/molecules/menu/menu.component';
import { FormComponent } from './component/organisms/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AlertComponent } from './component/molecules/alert/alert.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LibraryComponent,
    TechnologyComponent,
    NavComponent,
    ButtonComponent,
    HeaderComponent,
    MenuComponent,
    FormComponent,
    AlertComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    TechnologyService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor, 
      multi: true,
      
      
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }