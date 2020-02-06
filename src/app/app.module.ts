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
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { ApplyComponent } from './apply/apply.component';
import { SrUserExperienceDesignerComponent } from './sr-user-experience-designer/sr-user-experience-designer.component';
import { FullStackDeveloperComponent } from './full-stack-developer/full-stack-developer.component';
import { SrFullStackDeveloperComponent } from './sr-full-stack-developer/sr-full-stack-developer.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CareerComponent,
    ContactUSComponent,
    ApplyComponent,
    SrUserExperienceDesignerComponent,
    FullStackDeveloperComponent,
    SrFullStackDeveloperComponent,
    
   
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
    ])
  ],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy}   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
