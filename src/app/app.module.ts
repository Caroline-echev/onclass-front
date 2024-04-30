

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor'; 

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ButtonComponent } from './atoms/button/button.component';
import { HeaderComponent } from './atoms/header/header.component';
import { NavComponent } from './molecules/nav/nav.component';
import { TextComponent } from './atoms/text/text.component';
import { LibraryComponent } from './pages/library/library.component';
import { TemplateComponent } from './pages/template/template.component';

import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './molecules/menu/menu.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'library', component: LibraryComponent },
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ButtonComponent,
    HeaderComponent,
    NavComponent,
    TextComponent,
    LibraryComponent,
    TemplateComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
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
