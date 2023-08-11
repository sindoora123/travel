import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewuserModule } from './newuser/newuser.module';
import { CommonModule } from '@angular/common';
import { BookingModule } from './booking/booking.module';



@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    FormsModule,
    ReactiveFormsModule,
    NewuserModule,
    CommonModule,
    BookingModule
  // NewuserModule
   
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
