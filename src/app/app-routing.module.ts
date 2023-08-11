import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './home/header/header.component';
import { LoginhomeComponent } from './login/loginhome/loginhome.component';
import { CreateUserComponent } from './newuser/create-user/create-user.component';
import { TravelbookComponent } from './booking/travelbook/travelbook.component';

const routes: Routes = [
  {path:'home',component:HeaderComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)},
  {path:'login',component:LoginhomeComponent},
  {path:'log',loadChildren:()=>import('./login/login.module').then(l=>l.LoginModule)},
  {path:'newuser',component:CreateUserComponent},
  {path:'create',loadChildren:()=>import('./newuser/newuser.module').then(c=>c.NewuserModule)},
  {path:'booking',component:TravelbookComponent},
  {path:'book',loadChildren:()=>import('./booking/booking.module').then(b=>b.BookingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
