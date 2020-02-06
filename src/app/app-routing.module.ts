import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CareerComponent } from './career/career.component';
import { ContactUSComponent } from './contact-us/contact-us.component';
import { ApplyComponent } from './apply/apply.component';
import { SrUserExperienceDesignerComponent } from './sr-user-experience-designer/sr-user-experience-designer.component';
import { FullStackDeveloperComponent } from './full-stack-developer/full-stack-developer.component';
import { SrFullStackDeveloperComponent } from './sr-full-stack-developer/sr-full-stack-developer.component';




const routes:Routes=[
  { path : '', redirectTo:'/dashBoard', pathMatch:'full'},
  { path : 'dashBoard', component :DashboardComponent },
  { path : 'career', component :CareerComponent },
  { path : 'contact-us', component :ContactUSComponent },
  { path : 'apply', component :ApplyComponent },
  { path : 'sr-user-experience-designer', component :SrUserExperienceDesignerComponent },
  { path : 'full-stack-developer', component :FullStackDeveloperComponent },
  { path : 'sr-full-stack-developer', component :SrFullStackDeveloperComponent },



 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  
  exports:[RouterModule],
  providers: []
})
export class AppRoutingModule { }
