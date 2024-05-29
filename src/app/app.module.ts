import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { DisplayComponent } from './components/display/display.component';
import { DeliveryDateComponent } from './components/delivery-date/delivery-date.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DeliveryComponent,
    DisplayComponent,
    DeliveryDateComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
