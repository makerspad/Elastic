import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common"

import { HttpClientModule } from '@angular/common/http';
import { CareerComponent } from './career/career.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { Designation1Component } from './designation1/designation1.component';
import { Designation2Component } from './designation2/designation2.component';
import { Designation3Component } from './designation3/designation3.component';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ApplyComponent } from './apply/apply.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CareerComponent,
    ContactUSComponent,
    Designation1Component,
    Designation2Component,
    Designation3Component,
    ApplyComponent,
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path : '', redirectTo:'/dashBoard', pathMatch:'full'},
  { path : 'dashBoard', component :DashboardComponent },
  { path : 'career', component :CareerComponent },
  { path : 'contact-us', component :ContactUSComponent },
  { path : 'designation1', component :Designation1Component },
  { path : 'designation2', component :Designation2Component },
  { path : 'designation3', component :Designation3Component },
    ])
  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy}   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
