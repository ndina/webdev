import { BrowserModule } from '@angular/platform-browser';
import { ClassProvider, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {AuthInterceptor} from './AuthInterceptor';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { AccordionModule } from 'ngx-bootstrap/accordion';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { ProviderService } from './main/services/provider.service';
import { HttpClientModule } from '@angular/common/http';
//for header (authorization, token)
@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    //AccordionModule.forRoot()

  ],
  providers: [ProviderService,
    <ClassProvider> {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
