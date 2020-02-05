import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CareerComponent } from './career/career.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { Designation1Component } from './designation1/designation1.component';
import { Designation2Component } from './designation2/designation2.component';
import { Designation3Component } from './designation3/designation3.component';
import { ApplyComponent } from './apply/apply.component';




const routes:Routes=[
  { path : '', redirectTo:'/dashBoard', pathMatch:'full'},
  { path : 'dashBoard', component :DashboardComponent },
  { path : 'career', component :CareerComponent },
  { path : 'contact-us', component :ContactUSComponent },
  { path : 'designation1', component :Designation1Component },
  { path : 'designation2', component :Designation2Component },
  { path : 'designation3', component :Designation3Component },
  { path : 'apply', component :ApplyComponent },


 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  
  exports:[RouterModule],
  providers: []
})
export class AppRoutingModule { }
