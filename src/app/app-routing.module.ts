import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarTableComponent} from "./components/car-table/car-table.component";
import {RegisterComponent} from "./components/register/register.component";

const routes: Routes = [
  {path: '', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
