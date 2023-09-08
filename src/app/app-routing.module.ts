import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CountryhomeComponent } from './component/countryhome/countryhome.component';
import { StatehomeComponent } from './component/statehome/statehome.component';

const routes: Routes = [
  {
    path:'',
    component:DashboardComponent,
    children:[
      {
        path:'countryhome',
        component:CountryhomeComponent
      },
      {
        path:'statehome',
        component:StatehomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
