import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelbookComponent } from './travelbook/travelbook.component';

const routes: Routes = [
    {path:'',component:TravelbookComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class travelbookRoutingModule { }
