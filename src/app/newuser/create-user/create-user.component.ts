import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { TravelService } from 'src/app/travel.service';

@Component({
  selector:'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls:['./create-user.component.scss']
})
export class CreateUserComponent implements OnInit {
  userForm!: FormGroup;
  user:any[]=[];  
  constructor(private router:Router,private travelsertvice:TravelService, private fb: FormBuilder) { 
}
ngOnInit(): void {
  
  this.userForm = this.fb.group({
    fname:new FormControl('',[Validators.required]),
    lname:new FormControl('',[Validators.required]),
    phone: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email],),
    date: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    confirmPassword: new FormControl('',[Validators.required]),
  });
}

  Onsubmit(){
    // console.log('this.userForm.value',this.userForm);
    // console.log('this.userForm.valid',this.userForm.valid);
    
  if (this.userForm.valid) {
    const registrationData = this.userForm.value;
    // Store the registration data using the DataService
    this.travelsertvice.addUser(registrationData);
    console.log(registrationData);
  }
    // Reset the form after successful registration
    this.userForm.reset();  
    this.router.navigate(['./home'])
    alert("contact added sucessffully")
  
    
  }
back(){
        this.router.navigate(['./home'])
      }

}