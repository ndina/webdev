import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './category/category.component';
import { RoutesComponent } from './routes/routes.component';
import { AppModuleComponent } from './app-module/app-module.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    RoutesComponent,
    AppModuleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
