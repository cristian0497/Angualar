import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header_comp } from './headers-components/header/header.component';
import { Main_Component } from './components/main/main.component';

@NgModule({
  declarations: [
    AppComponent,
    Header_comp,
    Main_Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
