import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginhomeComponent } from './loginhome/loginhome.component';

const routes: Routes = [
  {path:'',component:LoginhomeComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class LoginModule { }
