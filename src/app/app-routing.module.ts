import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CarTableComponent} from "./pages/car-table/car-table.component";
import {RegisterComponent} from "./pages/register/register.component";
import { UpdateComponent } from './pages/update/update.component';

const routes: Routes = [
  {path: '', component: CarTableComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'update', component: UpdateComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
