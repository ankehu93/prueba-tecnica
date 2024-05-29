import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { HomeComponent } from './home/home.component';
import { DeliveryDateComponent } from './components/delivery-date/delivery-date.component';


const routes: Routes =[
  {path:'', redirectTo:'/home', pathMatch:'full'},
  {path:'home', component: HomeComponent},
  {path:'delivery', component: DeliveryComponent},
  {path:'delivery-date', component: DeliveryDateComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
