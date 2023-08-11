import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TravelbookComponent } from './travelbook/travelbook.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TravelbookComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class BookingModule { }
