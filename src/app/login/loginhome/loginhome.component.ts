import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { TravelService } from 'src/app/travel.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-loginhome',
  templateUrl: './loginhome.component.html',
  styleUrls: ['./loginhome.component.scss']
})

export class LoginhomeComponent {
  
 
  loginForm!: FormGroup;
  userForm: any;

  constructor( private router:Router,private formBuilder: FormBuilder,private travelService:TravelService) { 
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  back(){
    this.router.navigate(['./home'])
  
  }
  onSubmit() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const password = this.loginForm.value.password;
    // Validate the login using DataService
      const user=this.travelService.getUserByEmail(email)  ;  
if (user && user.password === password) {
      console.log(user);
      this.router.navigate(['./booking'])
      alert("logged sucssfully")
}else{
      alert("incorrect password")
    }
    }
   }}