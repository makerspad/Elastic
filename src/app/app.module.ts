import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';


import { HttpClientModule } from '@angular/common/http';
import { CareerComponent } from './career/career.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CareerComponent,
   
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
