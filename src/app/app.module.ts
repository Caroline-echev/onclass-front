import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor'; 
import { AppComponent } from './app.component';
import { TechnologyService } from 'src/app/services/technology.service'; 
import { ErrorHandlingService } from './services/error-handling.service';
import { AtomsModule } from './component/atoms/atoms.module';
import { MoleculesModule } from './component/molecules/molecules.module';
import { OrganismsModule } from './component/organisms/organisms.module';
import { PagesRoutingModule } from './component/pages/pages-routing.module';
import { PagesModule } from './component/pages/pages.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PagesRoutingModule,
    AtomsModule,
    MoleculesModule,
    OrganismsModule,
    PagesModule
  ],
  providers: [
    TechnologyService,
    ErrorHandlingService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor, 
      multi: true,  
    },
   
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


