import { NgModule, Component } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CareerComponent } from './career/career.component';



const routes:Routes=[
  { path : '', redirectTo:'/DashBoard', pathMatch:'full'},
  { path : 'DashBoard', component :DashboardComponent },
  { path : 'career', component :CareerComponent },

 ];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  
  exports:[RouterModule]
})
export class AppRoutingModule { }
