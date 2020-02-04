import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


import { HttpClientModule } from '@angular/common/http';
import { CareerComponent } from './career/career.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { Designation1Component } from './designation1/designation1.component';
import { Designation2Component } from './designation2/designation2.component';
import { Designation3Component } from './designation3/designation3.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CareerComponent,
    ContactUSComponent,
    Designation1Component,
    Designation2Component,
    Designation3Component,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
