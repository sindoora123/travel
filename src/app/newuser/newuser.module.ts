import { NgModule } from '@angular/core';
import { CreateUserComponent } from './create-user/create-user.component';
import {  ReactiveFormsModule, FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    CreateUserComponent
  ],
  imports: [
  
   ReactiveFormsModule,
   FormsModule,
   CommonModule
    
  ]
})
export class NewuserModule { }
