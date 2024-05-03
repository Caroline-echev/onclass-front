

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor'; 

import { AppComponent } from './app.component';

import { HomeComponent } from 'src/app/component/pages/home/home.component';
import { LibraryComponent } from 'src/app/component/pages/library/library.component';


import { ButtonComponent } from 'src/app/component/atoms/button/button.component';
import { HeaderComponent } from 'src/app/component/atoms/header/header.component';

import { NavComponent } from 'src/app/component/molecules/nav/nav.component';
import { TemplateComponent } from 'src/app/component/template/template.component';
import { MenuComponent } from 'src/app/component/molecules/menu/menu.component';
import { FormComponent } from 'src/app/component/organisms/form/form.component';
import { InputComponent } from 'src/app/component/molecules/input/input.component';

import { BodyFormComponent } from 'src/app/component/organisms/body-form/body-form.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    HeaderComponent,
    NavComponent,
    LibraryComponent,
    TemplateComponent,
    MenuComponent,
    FormComponent,
    InputComponent,
    BodyFormComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
    
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
